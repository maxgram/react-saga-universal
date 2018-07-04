// import 'react-hot-loader/patch'
// import { AppContainer } from 'react-hot-loader'
import React, { Fragment } from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store, history } from 'Redux/store/store.dev'

import DevTools from 'Containers/devtools'
import rootSaga from 'Redux/rootSaga'

import AppRoot from './root'


store.runSaga(rootSaga)
const domRoot = document.getElementById('root')

const renderApp = () => {
  render(
      <Provider store={store}>
        <Fragment>
          <Router history={history}>
            <AppRoot />
          </Router>
          <DevTools />
        </Fragment>
      </Provider>
    , domRoot
  )
}

if(module.hot) {
  module.hot.accept()
  setImmediate(() => {
    unmountComponentAtNode(domRoot)
    renderApp()
  })
} else {
  renderApp()
}
