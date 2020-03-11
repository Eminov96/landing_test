import React, {useRef, useState} from 'react';
import {connect} from "react-redux";
import Slider from 'infinite-react-carousel';
import {setSlide} from "../../actions/actionsMainPage";

import FullScreen, { fullScreenSupported } from 'react-request-fullscreen';

import './common.scss'

function Carousel({sliderClassName, managingSliderClassName, setSlide, carouselImages, currentSlide}) {

    const { isFullScreen } = useState(false);
    let elFullScreenRef = useRef(null);
    let elRef = useRef(null);

    const changeCurrentSlide = (index) => {
        setSlide(index);
    };

    const requestOrExitFullScreenByElement = () => {
        elFullScreenRef.fullScreen(elRef);
    };

    return (
        <div className={sliderClassName} ref={ref => { elRef = ref }}>
            <Slider duration={150} className={''} afterChange={changeCurrentSlide}>
                {carouselImages && carouselImages.map((image, index)=>
                    <img className={'carouselImage'} key={index} src={image} alt=""/>
                )}
            </Slider>
            <div className={managingSliderClassName}>
                <span>{currentSlide+1}/{carouselImages.length}</span>

                {/*<FullScreen ref={ref => {elFullScreenRef = ref }}>*/}
                {/*    <div*/}
                {/*        className='el-rq'*/}
                {/*        onClick={requestOrExitFullScreenByElement}*/}
                {/*    >*/}
                {/*        {!isFullScreen ? 'Request FullScreen by Element' : 'Exit FullScreen by Element'}*/}
                {/*    </div>*/}
                {/*</FullScreen>*/}

            </div>
        </div>
    );
}

const mapStateToProps = (store) => ({
    carouselImages:store.mainPage.carouselHeaderImages,
    currentSlide:store.mainPage.currentSlide,
});

const mapDispatchToProps = {
    setSlide
};

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);

