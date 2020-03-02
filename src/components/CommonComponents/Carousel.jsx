import React from 'react';
import {connect} from "react-redux";
import Slider from 'infinite-react-carousel';
import {setSlide} from "../../actions/actionsMainPage";
import './common.scss'

function Carousel({sliderClassName, managingSliderClassName, setSlide, carouselImages, currentSlide}) {

    const changeCurrentSlide = (index) => {
        setSlide(index);
    };

    return (
        <div className={sliderClassName} >
            <Slider duration={150} className={''} afterChange={changeCurrentSlide} >
                {carouselImages && carouselImages.map((image, index)=>
                    <img className={'carouselImage'} key={index} src={image} alt=""/>
                )}
            </Slider>
            <div className={managingSliderClassName}>
                <span>{currentSlide+1}/{carouselImages.length}</span>
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

