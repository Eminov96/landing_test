import {takeLatest, all, fork} from 'redux-saga/effects';
import * as message from "./sendMessage";
import {SEND_MESSAGE} from "../../constants/constantsSendingData";


function* IndexSaga() {

    function* messageData() {
        yield takeLatest(SEND_MESSAGE, message.sendMessage);
    }

    yield all( [
        fork(messageData),
    ]);

}
export default IndexSaga;
