import { GET_ORDERS_FROM_SERVER } from './types';

const initiaState = {
    orders: [],
};



export const ordersReduser = (state = initiaState, action) => {
    switch (action.type) {
        case GET_ORDERS_FROM_SERVER: 
            return {...state, orders: action.payload};
        
        default: return state;
    }
};