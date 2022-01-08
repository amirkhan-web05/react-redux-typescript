import {ICartItems} from "../../interfaces";
import {Types} from "../types";
import {Dispatch} from "react";
import {getCars, getFiltered, getSortBy} from "../../api/api";
import {TypeCarsFetch} from "./action-interfaces";

export const fetchCars = <T extends number, R extends number>(currentPage:T, perPage:R) => (dispatch:Dispatch<TypeCarsFetch>) => {
    getCars(currentPage, perPage).then(({data}) => {
        dispatch(setCars(data))
    })
}

export const fetchFiltered = <T extends string, R extends null>(categories:T | R) => (dispatch:Dispatch<TypeCarsFetch>) => {
    getFiltered(categories).then(({data}) => {
        dispatch(setCars(data))
    })
}

export const fetchSortBy = (sortBy:any) => (dispatch:Dispatch<TypeCarsFetch>) => {
    getSortBy(sortBy).then(({data}) => {
        dispatch(setCars(data))
    })
}

export const setCars = (items:ICartItems[]):TypeCarsFetch => ({
  type:Types.SET_CART,
  payload:items
})