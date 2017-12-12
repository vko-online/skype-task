// @flow
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import rootSaga from './Sagas'
import rootReducer from './Reducers'

const ArrayMiddleware = store => next => action =>
  (Array.isArray(action) ? action.map(next) : next(action))

function warn (error) {
  console.warn(error.message || error)
  throw error
}

const PromiseMiddleware = store => next => action =>
  (typeof action.then === 'function'
    ? Promise.resolve(action).then(next, warn)
    : next(action))

const configureStore = (rootReducerArg, rootSagaArg) => {
  const middlewares = [thunk, ArrayMiddleware, PromiseMiddleware]
  const enhancers = []

  const sagaMiddleware = createSagaMiddleware()
  middlewares.push(sagaMiddleware)

  enhancers.push(applyMiddleware(...middlewares))

  const store = createStore(rootReducerArg, compose(...enhancers))

  sagaMiddleware.run(rootSagaArg)

  return store
}

const store = configureStore(rootReducer, rootSaga)
export default store
