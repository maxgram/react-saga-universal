import 'react-hot-loader/patch'
import React from 'react'
import { render } from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { ConnectedRouter } from 'react-router-redux'

import AppRoot from './root'

import configureStore from 'Redux/store/configureStoreProd'
import rootSaga from 'Redux/rootSaga'

const preloadedState = window.__INITIAL_STATE__
const history = createHistory()
const store = configureStore(history, preloadedState)
      store.runSaga(rootSaga)
const domRoot = document.getElementById('root')

const renderApp = () => {
  render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppRoot />
      </ConnectedRouter>
    </Provider>,
    domRoot
  )
}

renderApp()
