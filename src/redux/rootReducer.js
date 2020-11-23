import { combineReducers } from "redux";
import { appReduser } from "./appReduser";
import { ordersReduser } from "./ordersReduser";
import { questionAnswerReducer } from "./questionAnswerReducer";



export const rootReducer = combineReducers({
    app: appReduser,
    questionAnswer: questionAnswerReducer,
    orders: ordersReduser
})