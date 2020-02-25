import React from 'react';
import Button from '@material-ui/core/Button';

function Btn({variant, text, btnClassName, handleClick}) {
    return (
        <Button onClick={handleClick} className={btnClassName} variant={variant}>{text}</Button>
    );
}

export default Btn;