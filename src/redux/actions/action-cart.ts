import {Types} from "../types";
import {ICartItems} from "../../interfaces";

export const addToCart = (cart:ICartItems) => ({
    type:Types.ADD_TO_CART,
    payload:cart
})

export const removeToCart = (id:number) => ({
    type:Types.REMOVE_TO_CART,
    payload: id
})

export const clearCart = () => ({
    type:Types.CLEAR_CART
})