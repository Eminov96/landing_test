import React from 'react';
import Button from '@material-ui/core/Button';

function Image({wrapperImageClassName, imageClassName, imgSrc}) {
    return (
        <div className={wrapperImageClassName}>
            <img alt='' src={imgSrc} className={imageClassName}/>
        </div>
    );
}
export default Image;