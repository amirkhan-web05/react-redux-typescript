import {Types} from "../types";
import {ICartItems} from "../../interfaces";

export const addToCart = (cart:ICartItems) => ({
    type:Types.ADD_TO_CART,
    payload:cart
})

export const removeToCart = (id:number) => ({
    type:Types.REMOVE_FROM_CART,
    payload: id
})

export const plusCartItem = (id:number) => ({
    type:Types.PLUS_CART_ITEM,
    payload:id
})

export const minusCartItem = (id:number) => ({
    type:Types.MINUS_CART_ITEM,
    payload:id
})

export const clearCart = () => ({
    type:Types.CLEAR_CART
})