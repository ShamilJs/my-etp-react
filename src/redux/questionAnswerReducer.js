
import { GET_QUESTIONS_FROM_SERVER,
	GET_ANSWERS_FROM_SERVER,
	ADD_NEW_QUESTION,
	ADD_NEW_ANSWER,
	CHANGE_QUESTION_STATUS } from './types';

const initiaState = {
	questions: [],
	answers: [],
};



export const questionAnswerReducer = (state = initiaState, action) => {
    switch (action.type) {
        case GET_QUESTIONS_FROM_SERVER: 
            return {...state, questions: action.payload || []};
		case GET_ANSWERS_FROM_SERVER: 
			return {...state, answers: action.payload || []};
		case ADD_NEW_QUESTION: 
			return {...state, questions: state.questions.concat([action.payload])};
		case ADD_NEW_ANSWER: 
			return {...state, answers: state.answers.concat([action.payload])};
		case CHANGE_QUESTION_STATUS: 
			return {...state, questions: state.questions.map(item => (item.id === action.id) ?
				{...item, status: action.payload} : item)};
        default: return state;
    }
};