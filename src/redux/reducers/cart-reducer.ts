import {ICartItems} from "../../interfaces";
import {TypeActionCart} from "../actions/action-interfaces";
import {Types} from "../types";

const initialState = {
    cart:<ICartItems[]>[]
}

type TypeInitialStateCart = typeof initialState

export const cart = (state = initialState, action:TypeActionCart):TypeInitialStateCart => {
    switch (action.type) {
        case Types.ADD_TO_CART: {
            const findCart = state.cart.find(item => item.id === action.payload.id)

            if (findCart) {
                findCart.count = action.payload.count
            } else {
                return {
                    ...state,
                    cart:[...state.cart, action.payload]
                }
            }

            return state
        }

        case Types.REMOVE_TO_CART: {
            return {
                ...state,
                cart:state.cart.filter(item => item.id !== action.payload)
            }
        }

        case Types.CLEAR_CART: {
            return initialState
        }

        default:
            return state
    }
}