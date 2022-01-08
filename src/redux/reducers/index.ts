import {combineReducers} from "redux";
import {cart} from "./cart-reducer";
import {cars} from "./cars-reducer";
import {paginate} from "./paginate-reducer";
import {filtered} from "./filtered-reducer";

export const rootReducers = combineReducers({
    cart,
    cars,
    paginate,
    filtered,
})

export type RootState = ReturnType<typeof rootReducers>