import React from 'react'
import Helmet from 'react-helmet'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import createHistory from 'history/createMemoryHistory'
import configureStore from 'Redux/store/configureStoreProd'
import rootSaga from 'Redux/rootSaga'

import { renderDom } from './html'
import AppRoot from './root'


const serverRenderer = (req, res) => {
  const history = createHistory()

  const store = configureStore(history, {})
  const domRoot = <Provider store={store}>
                    <StaticRouter location={req.url}>
                      <AppRoot />
                    </StaticRouter>
                  </Provider>

  store.runSaga(rootSaga).done.then(() => {
    const storeState = store.getState()
    const domString = renderToString(domRoot)
    const head = Helmet.renderStatic()

    res.status(200).send( renderDom(domString, storeState, head) )
  }).catch((e) => {
    console.log(e.message)
    res.status(500).send(e.message)
  })

  renderToString(domRoot)
  store.close()
}

export default serverRenderer
