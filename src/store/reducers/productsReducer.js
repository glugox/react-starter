import * as actions from '../../constants/actions/products'

const defaultState = {
    data: [],
    meta: {},
    loading: false
}

export const productsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actions.PRODUCTS_LIST_SUCCESS:
            return {
                ...state, ...action.payload, loading:false
            };
        case actions.PRODUCTS_LIST_REQUEST:
            return {
                ...state, loading: true
            }
        default:
            return state
    }
}

