import {SET_CURRENT_HEADER_TAB, SET_CURRENT_SLIDE, SET_CONTENT_SLIDE, SET_CURRENT_CONTENT_BTN} from "../constants/constantsMainPage";

export const currentHeaderTab = (name) => ({
    type: SET_CURRENT_HEADER_TAB,
    payload: name,
});

export const setSlide = (index) => ({
    type: SET_CURRENT_SLIDE,
    payload: index,
});

export const setContentSlide = (index) => ({
    type: SET_CONTENT_SLIDE,
    payload: index,
});

export const currentContentPortfolioBtn = (name) => ({
    type: SET_CURRENT_CONTENT_BTN,
    payload: name,
});
