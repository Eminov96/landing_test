import { combineReducers } from 'redux'
import {reducerMainPage} from "./reducerMainPage";
import {reducerSendingData} from "./reducerSendingData";


export const rootReducer = combineReducers({
    mainPage:reducerMainPage,
    sendingData:reducerSendingData,
});
