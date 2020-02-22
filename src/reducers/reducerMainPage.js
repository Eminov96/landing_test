import {SET_CURRENT_HEADER_TAB} from "../constants/constantsMainPage";

const initialState = {
    currentTab: 'Home',
};
export const reducerMainPage = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_HEADER_TAB:
            return {...state, currentTab: action.payload};

        default:
            return state
    }
};
