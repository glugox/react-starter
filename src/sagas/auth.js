import {call, put} from "redux-saga/effects"
import {loginSuccess, loginFailure, showError} from "../actions"
import authApi from '../api/auth'
import {
    USER_LOGIN_FAILURE, 
    USER_LOGIN_SUCCESS, 
    USER_LOGOUT_SUCCESS, 
    USER_LOGOUT_FAILURE, 
} from "../constants/actions"


export function* loginUserSaga(action){
    try {
        console.log("Action", action);
        const user = yield call(authApi.login, action.payload)
        console.log(" ==> " , user);
        // login successful if there's a jwt token in the response
        if (user.access_token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
        }
        yield put({type: USER_LOGIN_SUCCESS, user: user})
    } catch (e) {
        console.log(e);
        yield put({type: USER_LOGIN_FAILURE, errors: [e]})
        yield put(showError(e.message))
    }
}

export function* logoutUserSaga(action){
    try {
        
        localStorage.removeItem('user');
        yield put({type: USER_LOGOUT_SUCCESS})
    } catch (e) {
        console.log(e);
        yield put({type: USER_LOGOUT_FAILURE, errors: [e.response.statusText]})
    }
}