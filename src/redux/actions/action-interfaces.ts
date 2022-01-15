import {ICartItems} from "../../interfaces";
import {Types} from "../types";

interface TypePaginate {
    type:Types.SET_PAGINATE
    payload:number
}

interface IFilteredAction {
    type:Types.SET_CATEGORIES
    payload:any | string | null
}

interface ICountCartPlus {
    type:Types.PLUS_CART_ITEM
    payload:number
}

interface ICountMinusCart {
    type:Types.MINUS_CART_ITEM
    payload:number
}

export interface ISortByType {
    type:Types.SET_SORT_BY,
    payload: {
        type:string
        order:string
    }
}

interface ISetLoaded {
    type:Types.SET_LOADED,
    payload:boolean
}

export interface TypeCarsFetch {
    type:Types.SET_CART,
    payload:ICartItems[]
}

interface TypeAddToCart {
    type:Types.ADD_TO_CART,
    id:number,
    count:number
    payload:ICartItems
}

interface TypeRemoveToCart {
    type:Types.REMOVE_FROM_CART,
    payload: number
}

interface TypeClearCart {
    type:Types.CLEAR_CART
}

export type TypeActionCart = TypeAddToCart | ISetLoaded | ICountCartPlus | ICountMinusCart | ISortByType | TypeRemoveToCart | TypeClearCart | TypeCarsFetch | TypePaginate | IFilteredAction