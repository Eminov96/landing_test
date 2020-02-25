
import {call, put} from 'redux-saga/effects';
import {success, error} from "../../actions/actionsSendingData";
import * as message from "../API/message";


export function* sendMessage(action) {
    /*for response*/
    try {
        const response = yield call( message.send,  action);

        //yield put(success(response.data.success));

    } catch (e) {
       // yield put(error(e.response.data.error));
    }
}