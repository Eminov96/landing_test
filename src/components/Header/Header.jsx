import React from 'react';
import Logo from "../CommonComponents/Logo";
import Menu from "../CommonComponents/Menu";
import Title from "../CommonComponents/Title";
import Description from "../CommonComponents/Description";
import Btn from "../CommonComponents/Btn";
import Slider from "../CommonComponents/Slider";

import HeaderLogo from "../../images/Logo.png";
import "./header.scss";

function Header() {
    return (
        <div className="header">
            <div className={'header-information'}>
                <div className={'header-menu'}>
                    <Logo logoImageClassName={'header-logo-image'} logoClassName={'header-logo'} imgSrc={HeaderLogo}/>
                    <Menu list={['Home', 'About', 'What we offer?', 'Portfolio', 'Testimonials']} listClass={'header-list'} tabClass={'header-tab'}/>
                </div>
                <div className={'headerContent'}>
                    <Title titleClassName={''}/>
                    <Description descriptionClassName={''}/>
                    <Btn variant={'contained'} btnClassName={''} text={'Contact us'}/>
                </div>
            </div>
            <Slider sliderClassName={'header-slider'}/>
        </div>
    );
}

export default Header;
