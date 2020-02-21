import React from 'react';

function Logo({logoImageClassName, logoClassName, imgSrc}) {
    return (
        <div className={`${logoClassName}`}>
            <img className={`${logoImageClassName}`} src={imgSrc} alt=""/>
        </div>
    );
}

export default Logo;