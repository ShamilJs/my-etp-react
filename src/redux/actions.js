import { OPEN_WINDOW_REGISRATION,
    OPEN_REQUISITION_CARD,
    GET_ORDERS_FROM_SERVER,
    SHOW_LOADER,
    HIDE_LOADER } from './types';


export const openWindowRegistration = select => {
    return {
        type: OPEN_WINDOW_REGISRATION,
        payload: select
    };
};

export const openRequisitionCard = (open, order) => {
    return {
        type: OPEN_REQUISITION_CARD,
        payload: open,
        content: order
    };
};

export const showLoader = () => {
    return {
        type: SHOW_LOADER
    };
};

export const hideLoader = () => {
    return {
        type: HIDE_LOADER
    };
};

export const getOrdersFromServer = orders => {
    return {
        type: GET_ORDERS_FROM_SERVER,
        payload: orders
    };
};

