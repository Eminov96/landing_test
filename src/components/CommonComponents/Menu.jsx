import React from 'react';
import './common.scss';

function Menu({list, listClass, tabClass}) {

    const handleChange = () => {};

    return (
        <ul className={listClass}>
            {list.map((value, index)=>
                <li onClick={handleChange} key={index}>{value}</li>)
            }
        </ul>
    );
}

export default Menu;