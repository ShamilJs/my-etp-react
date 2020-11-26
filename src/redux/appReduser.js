import { OPEN_PRIVACY_POLICY,
    OPEN_REQUISITION_CARD,
    OPEN_PURCHASE_REQUISITION,
    SHOW_LOADER,
    HIDE_LOADER,
    OPEN_MODAL_DISCRIPTION,
    CREATE_PROMPT_ARRAY,
    OPEN_MODAL_HELLO,
    OPEN_REQUISITION_EXECUTOR } from './types';

const initiaState = {
	privacyPolicy: false,
    modalDiscription: false,
    modalHello: false,
	promptArray: [],
    place: '',
	requisitionCard: false,
	requisitionExecutor: false,
    purchaseRequisition: false,
	loader: false,
    order: {}
};



export const appReduser = (state = initiaState, action) => {
    switch (action.type) {
        case OPEN_PRIVACY_POLICY: 
            return {...state, privacyPolicy: action.payload};
        case OPEN_MODAL_DISCRIPTION: 
            return {...state, modalDiscription: action.payload, place: action.place};
        case OPEN_MODAL_HELLO: 
			return {...state, modalHello: action.payload, place: action.place};
		case CREATE_PROMPT_ARRAY: 
            return {...state, promptArray: action.payload};
        case OPEN_REQUISITION_CARD: 
			return {...state, requisitionCard: action.payload, order: action.content};
		case OPEN_REQUISITION_EXECUTOR: 
            return {...state, requisitionExecutor: action.payload, order: action.content};
        case OPEN_PURCHASE_REQUISITION: 
            return {...state, purchaseRequisition: action.payload};
        case SHOW_LOADER: 
			return {...state, loader: true};
		case HIDE_LOADER: 
            return {...state, loader: false};
        default: return state;
    }
};