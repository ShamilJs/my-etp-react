import { OPEN_WINDOW_REGISRATION } from './types';

const initiaState = {
    windowRegistr: '0',
};



export const appReduser = (state = initiaState, action) => {
    switch (action.type) {
        case OPEN_WINDOW_REGISRATION: 
            return {...state, windowRegistr: action.payload};
        default: return state;
    }
};