import React from 'react'
import { hydrate } from 'react-dom'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'

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
  hydrate(
    <Provider store={store}>
      <Router history={history}>
        <AppRoot />
      </Router>
    </Provider>
    , domRoot
  )
}

renderApp()
