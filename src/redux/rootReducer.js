import { combineReducers } from "redux";
import { appReduser } from "./appReduser";
import { ordersReduser } from "./ordersReduser";



export const rootReducer = combineReducers({
    app: appReduser,
    orders: ordersReduser
})