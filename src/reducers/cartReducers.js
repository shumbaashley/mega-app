import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";



export const cartReducer = (state={cart : []}, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            return {
                loading : false,
                cart : action.payload
            }
        default:
            return state;
    }
}



