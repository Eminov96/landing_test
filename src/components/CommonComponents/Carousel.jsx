import React from 'react';
import Slider from 'infinite-react-carousel';


import './common.scss'
import {currentHeaderTab, setSlide} from "../../actions/actionsMainPage";
import {connect} from "react-redux";

function Carousel({sliderClassName, managingSliderClassName, setSlide, carouselHeaderImages, currentSlide}) {

    const changeCurrentSlide = (index) => {
        setSlide(index);
    };

    return (
        <div className={sliderClassName} >
            <Slider duration={150} className={''} afterChange={changeCurrentSlide} >
                {carouselHeaderImages && carouselHeaderImages.map((image, index)=>
                    <div>
                        <img className={'carouselImage'} key={index} src={image} alt=""/>
                    </div>
                )}
            </Slider>
            <div className={managingSliderClassName}>
                <span>{currentSlide+1}/{carouselHeaderImages.length}</span>
            </div>
        </div>
    );
}

const mapStateToProps = (store) => ({
    carouselHeaderImages:store.mainPage.carouselHeaderImages,
    currentSlide:store.mainPage.currentSlide,
});

const mapDispatchToProps = {
    setSlide
};

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);

