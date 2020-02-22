import React from 'react';

function Menu({list, listClass, tabClass}) {

    const handleChange = () => {};

    return (
        <ul className={listClass}>
            {list.map((value, index)=>
                <li onClick={handleChange} className={`${tabClass}`} key={index}>{value}</li>)
            }
        </ul>
    );
}

export default Menu;