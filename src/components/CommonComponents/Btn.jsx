import React from 'react';
import Button from '@material-ui/core/Button';
import '../Content/content.scss'

function Btn({variant, text, btnClassName, handleClick, portfolioCounter, link}) {
    return (
        // link ? (
        //         <a href={link}>
        //             <Button
        //                 onClick={handleClick}
        //                 className={btnClassName}
        //                 variant={variant}>{text} {portfolioCounter && <p className={'counter-portfolioBtn'}>({portfolioCounter})</p>}
        //             </Button>
        //         </a>
        //     ):(
                <Button
                    onClick={handleClick}
                    className={btnClassName}
                    variant={variant}>{text} {portfolioCounter && <p className={'counter-portfolioBtn'}>({portfolioCounter})</p>}
                </Button>
       //     )
    );
}

export default Btn;