import {Types} from "../types";

export const setPaginate = (page:number) => ({
    type:Types.SET_PAGINATE,
    payload:page
})
