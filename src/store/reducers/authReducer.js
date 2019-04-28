
let user = JSON.parse(localStorage.getItem('user'));

const initialState = {
    loggedIn:  true, // !!user
    loggingIn: false,
    user,
    requestingNewPassword: false
}

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case 'USER_LOGIN_REQUEST':
            return {
                loggingIn: true,
                user: action.user
            };
        case 'USER_LOGIN_SUCCESS':
            return {
                loggedIn: true,
                user: action.user
            };
        case 'USER_LOGIN_FAILURE':
            return {};
        case 'USER_LOGOUT_SUCCESS':
            return {
                loggedIn: false,
                user: null
            };
        default:
            return state
    }
}