import {
    USER_LOGIN_REQUEST, 
    USER_LOGOUT_REQUEST,
} from "../constants/actions"
import {
    USERS_LIST_REQUEST
} from "../constants/actions/users"
import {
    PRODUCTS_LIST_REQUEST
} from "../constants/actions/products"
import {takeLatest,takeEvery} from "redux-saga/effects"
import {loginUserSaga, logoutUserSaga} from './auth'
import {usersListSaga} from './users'
import {productsListSaga} from './products'


export default function* rootSaga(){
    
    // Auth
    yield takeEvery(USER_LOGIN_REQUEST, loginUserSaga)
    yield takeEvery(USER_LOGOUT_REQUEST, logoutUserSaga)
    
    // Users
    yield takeEvery(USERS_LIST_REQUEST, usersListSaga)
    
    // Products
    yield takeEvery(PRODUCTS_LIST_REQUEST, productsListSaga)

}