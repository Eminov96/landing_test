import {ERROR_MESSAGE, SUCCESS_MESSAGE} from "../constants/constantsSendingData";

const initialState = {
    success: '',
    error: ''

};
export const reducerSendingData = (state = initialState, action) => {
    switch (action.type) {
        case SUCCESS_MESSAGE:
            return {...state, success: action.payload};
        case ERROR_MESSAGE:
            return {...state, error: action.payload};
        default:
            return state
    }
};
