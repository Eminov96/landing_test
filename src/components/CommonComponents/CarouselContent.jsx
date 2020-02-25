import React from 'react';
import {connect} from "react-redux";
import {currentHeaderTab, setSlide, setContentSlide} from "../../actions/actionsMainPage";
import Slider from 'infinite-react-carousel';

import './common.scss'

import Couple from '../../images/testimonials/Ellipse 7.png';
import Couple2 from '../../images/testimonials/Ellipse 8.png'

function CarouselContent({rows, sliderClassName, managingSliderClassName, setContentSlide, carouselImages, currentContentSlide}) {

    const changeCurrentSlide = (index) => {
        setContentSlide(index);
    };

    return (
        <div className={'carousel-testimonials'} >
            <Slider rows={rows} duration={150} className={'carouselContent'} afterChange={changeCurrentSlide} >
                {carouselImages && carouselImages.map((image, index)=>
                    <div>
                        <img className={'carouselImageContent'} key={index} src={image} alt=""/>
                        <div className={'couple'}>
                            {/*<span>“</span>*/}
                            <div className={'couple-images'}>
                                <img src={Couple} alt=""/>
                                <img src={Couple2} alt=""/>
                            </div>
                            <p className={'couple-names'}>Tania + Mike</p>
                            <p className={'couple-date'}>23/02/2019</p>
                            <p className={'couple-text'}>
                                We didn't expect such amazing resuls.
                                We found Apiko by our friend’s recomendation and are completely satisfied now.
                            </p>
                        </div>
                    </div>
                )}
            </Slider>
            <div className={'carousel-testimonials-managing'}> {/* managingSliderClassName */}
                <span>{currentContentSlide+1}/{Math.ceil(carouselImages.length/rows)}</span>
            </div>
        </div>
    );
}

const mapStateToProps = (store) => ({
    carouselImages:store.mainPage.carouselContentImages,
    currentContentSlide:store.mainPage.currentContentSlide,
});

const mapDispatchToProps = {
    setContentSlide
};

export default connect(mapStateToProps, mapDispatchToProps)(CarouselContent);

