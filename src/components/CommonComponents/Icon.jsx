import React from 'react';
import Button from '@material-ui/core/Button';

function Icon({image, iconClassName, imageIconClassName, iconHref}) {
    return (
        <a target="_blank" href={iconHref} className={iconClassName}>
            <img alt="" src={image} className={imageIconClassName}/>
        </a>
    );
}

export default Icon;