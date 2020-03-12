import React, {useRef, useState} from 'react';
import {connect} from "react-redux";
import Slider from 'infinite-react-carousel';
import {setSlide} from "../../actions/actionsMainPage";
import Image from "./../../images/full-screen-arrow-expand-maximize-enlarge 1.png";
import FullScreen, { fullScreenSupported } from 'react-request-fullscreen';

import './common.scss'
import Dialog from "@material-ui/core/Dialog";


function Carousel({sliderClassName, managingSliderClassName, setSlide, carouselImages, currentSlide}) {

    let elRef = useRef(null);

    const changeCurrentSlide = (index) => {
        setSlide(index);
    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className={sliderClassName} ref={ref => { elRef = ref }}>
                <Slider duration={150} className={''} afterChange={changeCurrentSlide}>
                    {carouselImages && carouselImages.map((image, index)=>
                        <img className={'carouselImage'} key={index} src={image} alt=""/>
                    )}
                </Slider>
                <div className={managingSliderClassName}>
                    <span>{currentSlide+1}/{carouselImages.length}</span>
                    <div className={'full-screen'} onClick={handleClickOpen}>
                        <img src={Image} alt=""/>
                    </div>
                </div>
            </div>

            {/*classes={{paperWidthSm:{maxWidth: '800px'}}}*/}

            <Dialog style={{background: "white"}} fullWidth={true} onClose={handleClose} aria-labelledby="simple-dialog-title" open={open} >
                <div className={sliderClassName} ref={ref => { elRef = ref }}>
                    <Slider duration={150} className={'carousel-modal'} afterChange={changeCurrentSlide}>
                        {carouselImages && carouselImages.map((image, index)=>
                            <img className={'carouselImage'} key={index} src={image} alt=""/>
                        )}
                    </Slider>
                    <div className={'managing-slider-modal'}>
                        <span className={'counter-modal'}>{currentSlide+1}/{carouselImages.length}</span>
                        <div className={'full-screen-modal'} onClick={handleClose}>
                            <img src={Image} alt=""/>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>

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

