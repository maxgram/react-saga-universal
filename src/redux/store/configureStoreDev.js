import { createStore, applyMiddleware, compose } from 'redux'
// import { routerMiddleware } from 'react-router-redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware, { END } from 'redux-saga'
import DevTools from 'Containers/devtools'
import rootReducer from 'Redux/rootReducer'


export default function configureStore(history={}, initialState={}) {
  const sagaMiddleware = createSagaMiddleware()
  const logger = createLogger({ collapsed: true })
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        sagaMiddleware,
        logger,
        // routerMiddleware(history)
      ),
      DevTools.instrument()
    )
  )

  if (module.hot) {
    module.hot.accept('../rootReducer', () => {
      const nextRootReducer = require('../rootReducer').default
      store.replaceReducer(nextRootReducer)
    })
  }

  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END)
  return store
}
