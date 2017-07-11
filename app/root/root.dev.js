import 'react-hot-loader/patch'
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { ConnectedRouter } from 'react-router-redux'

import AppRoot from './AppRoot'
// import DevTools from '../containers/devtools' //<- TODO

import configureStore from '../redux/store'
import rootSaga from '../redux/rootSaga'

const preloadedState = window.__INITIAL_STATE__
const history = createHistory()
const store = configureStore(history, preloadedState)
      store.runSaga(rootSaga)
const domRoot = document.getElementById('root')

const renderApp = () => {
  render(
    <AppContainer>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <AppRoot />
        </ConnectedRouter>
      </Provider>
    </AppContainer>,
    domRoot
  )
}


// Enable hot reload by react-hot-loader
if (module.hot) {
  module.hot.accept('./AppRoot', () => {
    setImmediate(() => {
      // Preventing the hot reloading error from react-router
      unmountComponentAtNode(domRoot)
      renderApp()
    })
  })
}

renderApp()
