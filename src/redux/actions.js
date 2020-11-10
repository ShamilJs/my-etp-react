import { OPEN_WINDOW_REGISRATION } from './types';


export const openWindowRegistration = select => {
    return {
        type: OPEN_WINDOW_REGISRATION,
        payload: select
    };
};