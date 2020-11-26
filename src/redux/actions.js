import { OPEN_PRIVACY_POLICY,
    OPEN_REQUISITION_CARD,
    OPEN_PURCHASE_REQUISITION,
    GET_ORDERS_FROM_SERVER,
    SHOW_LOADER,
    HIDE_LOADER,
    GET_QUESTIONS_FROM_SERVER,
    GET_ANSWERS_FROM_SERVER,
    ADD_NEW_QUESTION,
    OPEN_MODAL_DISCRIPTION,
    ADD_NEW_ANSWER,
    CHANGE_QUESTION_STATUS,
    CREATE_PROMPT_ARRAY,
    OPEN_MODAL_HELLO,
    OPEN_REQUISITION_EXECUTOR,
    UPDATE_USER_DATA,
    CHECK_LOCAL_USER } from './types';

export const checkLocalUser = user => {
    return {
        type: CHECK_LOCAL_USER,
        payload: user
    };
};

export const openPrivacyPolicy = open => {
    return {
        type: OPEN_PRIVACY_POLICY,
        payload: open
    };
};

export const openModalDiscription = (open, place) => {
    return {
        type: OPEN_MODAL_DISCRIPTION,
        payload: open,
        place: place
    };
};

export const openModalHello = (open, place) => {
    return {
        type: OPEN_MODAL_HELLO,
        payload: open,
        place: place
    };
};

export const createPromptArray = arr => {
    return {
        type: CREATE_PROMPT_ARRAY,
        payload: arr,
    };
};


export const openRequisitionCard = (open, order) => {
    return {
        type: OPEN_REQUISITION_CARD,
        payload: open,
        content: order
    };
};

export const openRequisitionExecuitor = (open, order) => {
    return {
        type: OPEN_REQUISITION_EXECUTOR,
        payload: open,
        content: order
    };
};


export const openPurchaseRequisition = (open) => {
    return {
        type: OPEN_PURCHASE_REQUISITION,
        payload: open,
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

export const getQuestionsFromServer = questions => {
    return {
        type: GET_QUESTIONS_FROM_SERVER,
        payload: questions
    };
};

export const getAnswersFromServer = answers => {
    return {
        type: GET_ANSWERS_FROM_SERVER,
        payload: answers
    };
};

export const addNewQuestion = question => {
    return {
        type: ADD_NEW_QUESTION,
        payload: question
    };
};

export const addNewAnswer = answer => {
    return {
        type: ADD_NEW_ANSWER,
        payload: answer
    };
};

export const changeQuestionStatus = (id) => {
    return {
        type: CHANGE_QUESTION_STATUS,
        payload: true,
        id: id
    };
};

export const updateUserData = (user) => {
    return {
        type: UPDATE_USER_DATA,
        payload: user,
    };
};

