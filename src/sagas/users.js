import {call, put} from 'redux-saga/effects'
import usersApi from '../api/users'
import { USERS_LIST_SUCCESS, USERS_LIST_FAILURE } from '../constants/actions/users'
import {showError} from '../actions/alert'

export function* usersListSaga(action){
    try {
        const result = yield call(usersApi.list, action.payload)
        yield put({type: USERS_LIST_SUCCESS, payload: {...result, ...action.payload}})
    } catch (e) {
        yield put({type: USERS_LIST_FAILURE, error: e.message})
        yield put(showError(e.message))
    }
}
