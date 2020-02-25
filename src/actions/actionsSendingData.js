import {SEND_MESSAGE, SUCCESS_MESSAGE, ERROR_MESSAGE} from "../constants/constantsSendingData";


export const sendMessage = (data) => ({
    type: SEND_MESSAGE,
    payload: data,
});

export const error = (data) => ({
    type: ERROR_MESSAGE,
    payload: data,
});

export const success = (data) => ({
    type: SUCCESS_MESSAGE,
    payload: data,
});