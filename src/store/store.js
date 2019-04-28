import rootReducer from './reducers/rootReducer'
import {applyMiddleware, compose, createStore} from "redux"
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()
let storeMiddleware = applyMiddleware(sagaMiddleware)

if(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ != undefined){
    storeMiddleware = compose(
        storeMiddleware,
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    )
}
const store = createStore(
    rootReducer,
    storeMiddleware
)
sagaMiddleware.run(rootSaga)

export default store