import React from 'react';
import Logo from "../CommonComponents/Logo";
import Menu from "../CommonComponents/Menu";
import Title from "../CommonComponents/Title";
import Description from "../CommonComponents/Description";
import Btn from "../CommonComponents/Btn";
import Slider from "../CommonComponents/Slider";
import Icon from "../CommonComponents/Icon";

import HeaderLogo from "../../images/Logo.png";
import Facebook from "../../images/facebook.svg";
import Instagram from "../../images/instagram.svg";
import Youtube from "../../images/youtube.svg";

import "./header.scss";
import '../CommonComponents/common.scss'
function Header() {
    return (
        <div className="header">
            <div className={'header-information'}>
                <div className={'header-menu'}>
                    <Logo logoImageClassName={'header-logo-image'} logoClassName={'header-logo'} imgSrc={HeaderLogo}/>
                    <Menu list={['Home', 'About', 'What we offer?', 'Portfolio', 'Testimonials']} listClass={'header-list'} tabClass={'header-tab'}/>
                </div>
                <div className={'header-content'}>
                    <Title titleClassName={'header-content-title'} text={'We catch your happy moments'}/>
                    <Description descriptionClassName={'header-content-description'} text={'By choosing our agency you will obtain ' +
                                                                    'unforgetable memories and amazing experience. ' +
                                                                    'We will help you to make your dreams come true!'}/>
                    <div className={'wrapper-btn-socialNetwork'}>
                        <Btn variant={'contained'} btnClassName={'header-content-btn'} text={'Contact us'}/>
                        <Icon image={Facebook} iconClassName={'icon-socialNetwork'} imageIconClassName={''} iconHref={'https://facebook.com'}/>
                        <Icon image={Instagram} iconClassName={'icon-socialNetwork'} imageIconClassName={''} iconHref={'https://instagram.com'}/>
                        <Icon image={Youtube} iconClassName={'icon-socialNetwork'} imageIconClassName={''} iconHref={'https://youtube.com'}/>
                    </div>
                </div>
            </div>
            <Slider sliderClassName={'header-slider'}/>
        </div>
    );
}

export default Header;
