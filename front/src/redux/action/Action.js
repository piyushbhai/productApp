import { ADD_CART, REMOVE_CART } from '../constant/Constant'

export const add_to_cart = (count) => {
    return {
        type: ADD_CART,
        payload:count
    }
}

export const remove_from_cart =(id) => {
    return {
        type: REMOVE_CART,
        payload:id
    }
}