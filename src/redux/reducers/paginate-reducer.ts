import {TypeActionCart} from "../actions/action-interfaces";
import {Types} from "../types";

const initialState = {
    currentPage:1,
    perPage:8,
    totalCount:0
}

type TypeInitialState = typeof initialState

export const paginate = (state = initialState, action:TypeActionCart):TypeInitialState => {
    switch (action.type) {
        case Types.SET_PAGINATE: {
            return {
                ...state,
                currentPage: action.payload,
                totalCount:action.payload
            }
        }

        default:
            return state
    }
}