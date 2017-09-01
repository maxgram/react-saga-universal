import 'react-hot-loader/patch'
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { ConnectedRouter } from 'react-router-redux'

import { store, history } from 'Redux/store/store.dev'

import DevTools from 'Containers/devtools'
import rootSaga from 'Redux/rootSaga'

import AppRoot from './root'


store.runSaga(rootSaga)
const domRoot = document.getElementById('root')

const renderApp = () => {
  render(
    <AppContainer>
      <Provider store={store}>
        <div>
          <ConnectedRouter history={history}>
            <AppRoot />
          </ConnectedRouter>
          <DevTools />
        </div>
      </Provider>
    </AppContainer>,
    domRoot
  )
}


if (module.hot) {
  module.hot.accept()
  setImmediate(() => {
    unmountComponentAtNode(domRoot)
    renderApp()
  })
}

renderApp()
