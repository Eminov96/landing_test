import {SET_CURRENT_HEADER_TAB} from "../constants/constantsMainPage";

export const currentHeaderTab = (name) => ({
    type: SET_CURRENT_HEADER_TAB,
    payload: name,
});