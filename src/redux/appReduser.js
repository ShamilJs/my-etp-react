import { OPEN_WINDOW_REGISRATION,
    OPEN_REQUISITION_CARD,
    SHOW_LOADER,
    HIDE_LOADER } from './types';

const initiaState = {
    windowRegistr: false,
    requisitionCard: false,
	loader: false,
    order: {}
};



export const appReduser = (state = initiaState, action) => {
    switch (action.type) {
        case OPEN_WINDOW_REGISRATION: 
            return {...state, windowRegistr: action.payload};
        case OPEN_REQUISITION_CARD: 
            return {...state, requisitionCard: action.payload, order: action.content};
        case SHOW_LOADER: 
			return {...state, loader: true};
		case HIDE_LOADER: 
            return {...state, loader: false};
        default: return state;
    }
};