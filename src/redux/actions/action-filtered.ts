import {Types} from "../types";
import {TypeSortString} from "../../api/api";

export const setCategories = (items:string | null) => ({
    type:Types.SET_CATEGORIES,
    payload:items
})

export const setSortBy = ({type, order}:TypeSortString) => ({
    type:Types.SET_SORT_BY,
    payload: {
        type,
        order
    }
})