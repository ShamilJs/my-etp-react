import { OPEN_WINDOW_REGISRATION,
    OPEN_REQUISITION_CARD } from './types';

const initiaState = {
    windowRegistr: false,
    requisitionCard: false
};



export const appReduser = (state = initiaState, action) => {
    switch (action.type) {
        case OPEN_WINDOW_REGISRATION: 
            return {...state, windowRegistr: action.payload};
        case OPEN_REQUISITION_CARD: 
            return {...state, requisitionCard: action.payload};
        default: return state;
    }
};