import { combineReducers } from 'redux'
import {reducerMainPage} from "./reducerMainPage";


export const rootReducer = combineReducers({
    mainPage:reducerMainPage
});
