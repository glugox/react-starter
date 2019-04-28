import * as usersActions from '../../constants/actions/users'

const defaultState = {
    data: [],
    meta: {},
    loading: false
}

export const usersReducer = (state = defaultState, action) => {
    switch (action.type) {
        case usersActions.USERS_LIST_SUCCESS:
            return {
                ...state, ...action.payload, loading:false
            };
        case usersActions.USERS_LIST_REQUEST:
            return {
                ...state, loading: true
            }
        default:
            return state
    }
}

