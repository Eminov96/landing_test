
import {SET_CURRENT_HEADER_TAB, SET_CURRENT_SLIDE, SET_ABOUT_IMAGE} from "../constants/constantsMainPage";

import HeaderImage from '../images/Header Image.jpg';
import SliderPhoto1 from '../images/sliderPhoto1.jpg';
import SliderPhoto2 from '../images/SliderPhoto2.jpg';
import AboutImage from '../images/About Us Image.jpg';
import Camera from  '../images/camera-photo.svg';
import Circle from  '../images/shape-circle.svg';
import TapHand from  '../images/tap-hand.svg';
import Video from  '../images/video-camera.svg';


const initialState = {
    currentTab: 'Home',
    currentSlide: 0,
    carouselHeaderImages: [HeaderImage, SliderPhoto1, SliderPhoto2],
    aboutImage: AboutImage,
    offer: [
        {icon: Camera, title: 'Modern Photo and Video', description: 'We offer high-quality video and photo in order  to capture every detail of your  perfect wedding day.'},
        {icon: Circle, title: 'Air-drone photography', description: 'Have you ever dreamed of having a breathtaking movi-like video? Our professional photographers are highly skilled in using air-drones'},
        {icon: TapHand, title: 'Professional retoushing', description: 'Our team provides you with brilliant photo editing in really short terms. You\'ll get the amazing photos in the blink of your eye.'},
        {icon: Video, title: 'Actual Equipment', description: 'Our main goal is to achieve the outstanding results. So we are constantly in search of new updates of our equipment.'}
    ],

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
