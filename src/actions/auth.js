import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_LOGOUT_REQUEST
} from "../constants/actions";


export const login = user => ({
    type: USER_LOGIN_REQUEST,
    payload: user
})

export const loginSuccess = () => ({
    type: USER_LOGIN_SUCCESS
})


export const loginFailure  = (errors) => ({
    type: USER_LOGIN_FAILURE,
    errors
})

export const logout = () => ({
    type: USER_LOGOUT_REQUEST
})