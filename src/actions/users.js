import {
    USERS_LIST_REQUEST,
    USERS_LIST_SUCCESS,
    USERS_LIST_FAILURE,
} from "../constants/actions/users";


export const usersListRequest = ({page}) => ({
    type: USERS_LIST_REQUEST,
    payload: {page}
})

export const usersListSuccess = () => ({
    type: USERS_LIST_SUCCESS
})


export const usersListFailure  = (errors) => ({
    type: USERS_LIST_FAILURE,
    errors
})