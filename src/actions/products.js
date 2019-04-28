import {
    PRODUCTS_LIST_REQUEST,
    PRODUCTS_LIST_SUCCESS,
    PRODUCTS_LIST_FAILURE,
} from "../constants/actions/products";


export const productsListRequest = ({page}) => ({
    type: PRODUCTS_LIST_REQUEST,
    payload: {page}
})

export const productsListSuccess = () => ({
    type: PRODUCTS_LIST_SUCCESS
})


export const productsListFailure  = (errors) => ({
    type: PRODUCTS_LIST_FAILURE,
    errors
})