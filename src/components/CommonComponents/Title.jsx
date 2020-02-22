import React from 'react';


function Title({titleClassName, text}) {
    return (
        <p className={titleClassName}>{text}</p>
    );
}

export default Title;