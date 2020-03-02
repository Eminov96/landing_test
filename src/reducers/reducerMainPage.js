
import {
    SET_CURRENT_HEADER_TAB,
    SET_CURRENT_SLIDE,
    SET_ABOUT_IMAGE,
    SET_OFFER_IMAGE,
    SET_CONTENT_SLIDE, SET_CURRENT_CONTENT_BTN
} from "../constants/constantsMainPage";

import HeaderImage from '../images/Header Image.jpg';
import SliderPhoto1 from '../images/sliderPhoto1.jpg';
import SliderPhoto2 from '../images/SliderPhoto2.jpg';
import AboutImage from '../images/About Us Image.jpg';
import Camera from  '../images/camera-photo.svg';
import Circle from  '../images/shape-circle.svg';
import TapHand from  '../images/tap-hand.svg';
import Video from  '../images/video-camera.svg';
import Laugh from  '../images/laugh.svg';
import OfferImage from '../images/What we offer image.jpg'

import Testimonials from '../images/testimonials/Mask Group.png'
import Testimonials2 from '../images/testimonials/Mask Group2.png'
import Testimonials3 from '../images/testimonials/Mask Group3.png'
import Testimonials4 from '../images/testimonials/Mask Group3.png'
import {currentContentPortfolioBtn} from "../actions/actionsMainPage";

const initialState = {
    currentBtn: 'all',
    currentTab: 'Home',
    currentSlide: 0,
    currentContentSlide: 0,
    carouselHeaderImages: [HeaderImage, SliderPhoto1, SliderPhoto2],
    aboutImage: AboutImage,
    offer: [
        {icon: Camera, title: 'Modern Photo and Video', description: 'We offer high-quality video and photo in order  to capture every detail of your  perfect wedding day.'},
        {icon: Circle, title: 'Air-drone photography', description: 'Have you ever dreamed of having a breathtaking movi-like video? Our professional photographers are highly skilled in using air-drones'},
        {icon: TapHand, title: 'Professional retoushing', description: 'Our team provides you with brilliant photo editing in really short terms. You\'ll get the amazing photos in the blink of your eye.'},
        {icon: Video, title: 'Actual Equipment', description: 'Our main goal is to achieve the outstanding results. So we are constantly in search of new updates of our equipment.'},
        {key:'last', icon: Laugh, title: 'Travel wedding photography', description:
                'We believe that your wedding is one of the most important days in your life, that\'s ' +
                'why our company will do our best to make it unforgetable and peculiar. ' +
                'Our team can organize an extraordinary ceremony for you. ' +
                'If case you do not know exactly what you want - why don\'t you consider choosing to make your wedding ceremony outside. ' +
                'You can choose any place you like - from the park in your city to the bank of the seaside.'}
    ],
    offerImage: OfferImage,

    carouselContentImages: [Testimonials, Testimonials2, Testimonials3, Testimonials4],

};
export const reducerMainPage = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_HEADER_TAB:
            return {...state, currentTab: action.payload};
        case SET_CURRENT_SLIDE:
            return {...state, currentSlide: action.payload};
        case SET_ABOUT_IMAGE:
            return {...state, aboutImage: action.payload};
        case SET_OFFER_IMAGE:
            return {...state, offerImage: action.payload};
        case SET_CONTENT_SLIDE:
            return {...state, currentContentSlide: action.payload};
        case SET_CURRENT_CONTENT_BTN:
            return {...state, currentBtn: action.payload};
        default:
            return state
    }
};
