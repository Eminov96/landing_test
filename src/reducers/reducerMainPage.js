import {SET_CURRENT_HEADER_TAB, SET_CURRENT_SLIDE, SET_ABOUT_IMAGE} from "../constants/constantsMainPage";
import HeaderImage from '../images/Header Image.jpg';
import SliderPhoto1 from '../images/sliderPhoto1.jpg';
import SliderPhoto2 from '../images/SliderPhoto2.jpg';
import AboutImage from '../images/About Us Image.jpg';

const initialState = {
    currentTab: 'Home',
    currentSlide: 0,
    carouselHeaderImages: [HeaderImage, SliderPhoto1, SliderPhoto2],
    aboutImage: AboutImage,

};
export const reducerMainPage = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_HEADER_TAB:
            return {...state, currentTab: action.payload};
        case SET_CURRENT_SLIDE:
            return {...state, currentSlide: action.payload};
        case SET_ABOUT_IMAGE:
            return {...state, aboutImage: action.payload};
        default:
            return state
    }
};
