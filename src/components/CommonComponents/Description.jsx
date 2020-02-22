import React from 'react';


function Description({descriptionClassName, text}) {
    return (
        <p className={descriptionClassName}>{text}</p>
    );
}

export default Description;