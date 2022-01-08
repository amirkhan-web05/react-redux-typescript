import {TypeActionCart} from "../actions/action-interfaces";
import {Types} from "../types";

const initialState = {
    categories:null,
    sortBy: {
        type:'price',
        order:'desc'
    }
}

type TypeInitialState = typeof initialState

export const filtered = (state = initialState, action:TypeActionCart):TypeInitialState => {
    switch (action.type) {
        case Types.SET_CATEGORIES: {
            return {
                ...state,
                categories:action.payload
            }
        }

        case Types.SET_SORT_BY: {
            return  {
                ...state,
                sortBy: action.payload
            }
        }

        default:
            return state
    }
}