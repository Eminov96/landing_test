import React from 'react';

import HeaderImage from '../../images/Header Image.jpg'

function Slider({sliderClassName}) {
    return (
        <div className={sliderClassName}>
            <img src={HeaderImage} alt=""/>
        </div>
    );
}

export default Slider;