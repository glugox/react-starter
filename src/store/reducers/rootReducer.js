import { authReducer } from './authReducer'
import { layoutReducer } from './layoutReducer'
import { usersReducer } from './usersReducer'
import { productsReducer } from './productsReducer'

import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    auth: authReducer,
    layout: layoutReducer,
    users: usersReducer,
    products: productsReducer
})

export default rootReducer