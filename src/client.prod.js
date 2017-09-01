import 'react-hot-loader/patch'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { ConnectedRouter } from 'react-router-redux'

import createHistory from 'history/createBrowserHistory'
import configureStore from 'Redux/store/configureStoreProd'

import rootSaga from 'Redux/rootSaga'

import AppRoot from './root'


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
