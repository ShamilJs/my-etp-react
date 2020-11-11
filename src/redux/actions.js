import { OPEN_WINDOW_REGISRATION,
    OPEN_REQUISITION_CARD } from './types';


export const openWindowRegistration = select => {
    return {
        type: OPEN_WINDOW_REGISRATION,
        payload: select
    };
};

export const openRequisitionCard = open => {
    return {
        type: OPEN_REQUISITION_CARD,
        payload: open
    };
};
