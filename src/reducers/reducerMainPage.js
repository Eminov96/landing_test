import {SET_CURRENT_HEADER_TAB, SET_CURRENT_SLIDE} from "../constants/constantsMainPage";
import HeaderImage from '../images/Header Image.jpg';
import SliderPhoto1 from '../images/sliderPhoto1.jpg';
import SliderPhoto2 from '../images/SliderPhoto2.jpg';

const initialState = {
    currentTab: 'Home',
    currentSlide: 0,
    carouselHeaderImages: [HeaderImage, SliderPhoto1, SliderPhoto2],
};
export const reducerMainPage = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_HEADER_TAB:
            return {...state, currentTab: action.payload};
        case SET_CURRENT_SLIDE:
            return {...state, currentSlide: action.payload};
        default:
            return state
    }
};
