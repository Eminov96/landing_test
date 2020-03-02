import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import "./hamburgers.scss";

function MobileNavbar({list, listClass, tabClass}) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(null);

    const handleClick = event => {
        if (open){
            setOpen(null);
            setAnchorEl(null);
        }
        setOpen(true);
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={listClass}>
            <nav role="navigation" onClick={handleClick}>
                <div id="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
            {open &&  <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClick}
            >
                {list.map((value, index)=>
                    <MenuItem className={tabClass} key={index}>{value}</MenuItem>
                )}
            </Menu>}
        </div>
    );
}

export default MobileNavbar;