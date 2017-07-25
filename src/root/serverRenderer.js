import React from 'react'
import Helmet from 'react-helmet'

import createHistory from 'history/createMemoryHistory'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from '../redux/store'
import rootSaga from '../redux/rootSaga'

import AppRoot from './AppRoot'
import { renderDom } from './html'
const DEV_PORT = process.env.DEV_PORT
const PROD_PORT = process.env.PROD_PORT

const serverRenderer = (req, res) => {
  const port = PROD_PORT
  const urlPath = req.url
  const status = res.status
  const host = req.get('host').replace(/\:.*/, '')
  const history = createHistory()

  const head = Helmet.rewind();
        head.url = `https://${host}${urlPath}`

  const store = configureStore(history, {})
  const context = {}

  const htmlRoot =  <Provider store={store}>
                      <StaticRouter location={urlPath} context={context}>
                        <AppRoot />
                      </StaticRouter>
                    </Provider>



  store.runSaga(rootSaga).done.then(() => {
    console.log()
    // console.log('[:: SAGAS COMPLETE ::]')
    // console.log( JSON.stringify(store.getState()) )
    // console.log('::::::::::||::::::::::')

    res.status(200).send(
      renderDom( renderToString(htmlRoot), port, host, store.getState(), head )
    )
  }).catch((e) => {
    console.log(e.message)
    res.status(500).send(e.message)
  })

  renderToString(htmlRoot)
  store.close()
}


export default serverRenderer
