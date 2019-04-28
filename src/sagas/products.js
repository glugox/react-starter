import {call, put} from 'redux-saga/effects'
import api from '../api/products'
import { PRODUCTS_LIST_SUCCESS, PRODUCTS_LIST_FAILURE } from '../constants/actions/products'
import {showError} from '../actions/alert'

export function* productsListSaga(action){
    try {
        const result = yield call(api.list, action.payload)
        yield put({type: PRODUCTS_LIST_SUCCESS, payload: {...result, ...action.payload}})
    } catch (e) {
        yield put({type: PRODUCTS_LIST_FAILURE, error: e.message})
        yield put(showError(e.message))
    }
}
