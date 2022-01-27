import axios from "axios";
import {ICartItems} from "../interfaces";

export type TypeSortString = {
    type:string
    order:string
}

export const getCars = async <T extends number, R extends number> (currentPage:T, perPage:R) => {
    return axios.get<ICartItems[]>(`http://localhost:3001/cars?page=${perPage}&_limit=${currentPage}`)
}

export const getFiltered = <T extends string | null> (categories:T) => {
    return axios.get(`http://localhost:3001/cars?${categories !== null ? `name=${categories}` : ''}`)
}

export const getSortBy = <T extends TypeSortString> (sortBy:T) => {
    return axios.get(`http://localhost:3001/cars?_sort=${sortBy.type}&_order=${sortBy.order}`)
}

export const postCars = <T extends ICartItems> (cart:T) => {
    return axios.post(`http://localhost:3001/cart`, cart)
}