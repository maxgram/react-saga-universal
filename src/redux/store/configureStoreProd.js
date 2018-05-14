import { createStore, applyMiddleware, compose } from 'redux'
// import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware, { END } from 'redux-saga'
import rootReducer from 'Redux/rootReducer'


export default function configureStore(history={}, initialState={}) {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        sagaMiddleware,
        // routerMiddleware(history)
      ),
    )
  )

  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END)
  return store
}
