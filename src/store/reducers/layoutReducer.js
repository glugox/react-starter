import * as actions from '../../constants/actions'

const initialState = {
    smallMenu: false
}
export function layoutReducer(state = initialState, action) {
    switch (action.type) {
        case actions.TOGGLE_MENU:
            return {
                ...state,
                smallMenu: !state.smallMenu
            };
        default:
            return state;
    }
}