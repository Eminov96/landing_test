import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import "./hamburgers.scss";

function MobileNavbar({list, listClass, tabClass}) {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={listClass}>
            <nav role="navigation"  onClick={handleClick}>
                <div id="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>

                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        // keepMounted
                        open={Boolean(anchorEl)}
                        // onClose={handleClose}
                    >
                        {list.map((value, index)=>
                            <MenuItem onClick={handleClose} className={tabClass} key={index}>{value}</MenuItem>
                        )}
                    </Menu>
                </div>


            </nav>
            {/*<ul className={listClass}>*/}
            {/*    {list.map((value, index)=>*/}
            {/*        <li onClick={handleClose} className={tabClass} key={index}>{value}</li>)*/}
            {/*    }*/}
            {/*</ul>*/}

        </div>
    );
}

export default MobileNavbar;