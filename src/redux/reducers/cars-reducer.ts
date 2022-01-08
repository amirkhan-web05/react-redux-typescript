import {ICartItems} from "../../interfaces";
import {TypeActionCart} from "../actions/action-interfaces";
import {Types} from "../types";


const initialState = {
    items: <ICartItems[]>[],
    loaded:false
}

type TypeInitialState = typeof initialState

export const cars = (state = initialState, action:TypeActionCart):TypeInitialState => {
    switch (action.type) {
        case Types.SET_CART: {
            return {
                ...state,
                items:action.payload,
                loaded: true
            }
        }

        case Types.SET_LOADED: {
            return {
                ...state,
                loaded: action.payload
            }
        }

        default:
            return  state
    }
}