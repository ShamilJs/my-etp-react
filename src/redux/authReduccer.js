import { UPDATE_USER_DATA } from './types';

const initiaState = {
    userData: {},
    localUser: false
};



export const authReduccer = (state = initiaState, action) => {
    switch (action.type) {
        case UPDATE_USER_DATA: 
            return {...state, userData: action.payload};

        default: return state;
    }
};