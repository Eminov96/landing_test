import React from 'react';
import Logo from "../CommonComponents/Logo";
import Description from "../CommonComponents/Description";
import Menu from "../CommonComponents/Menu";
import Icon from "../CommonComponents/Icon";
import Facebook from "../../images/facebook.svg";
import Instagram from "../../images/instagram.svg";
import Youtube from "../../images/youtube.svg";
import LogoImage from "../../images/footer/Logo.png"
import "./footer.scss";
function Footer() {
    return (
        <div className="footer">
            <div className="footer-menu">
                <Logo imgSrc={LogoImage} logoClassName={'footer-menu-logo'} logoImageClassName={'footer-menu-logo-image'}/>
                <Menu list={['Home', 'About', 'What we offer?', 'Portfolio', 'Testimonials']} listClass={'footer-menu-list'} tabClass={'footer-menu-tab'}/>
            </div>
            <div className={'footer-info'}>
                <Description text={'2019 © Apiko. All rights reserved.'} descriptionClassName={'footer-info-description'}/>
                <div className={'footer-info-socialNetwork'}>
                    <Icon image={Facebook} iconClassName={'icon-socialNetwork'} imageIconClassName={''} iconHref={'https://facebook.com'}/>
                    <Icon image={Instagram} iconClassName={'icon-socialNetwork'} imageIconClassName={''} iconHref={'https://instagram.com'}/>
                    <Icon image={Youtube} iconClassName={'icon-socialNetwork'} imageIconClassName={''} iconHref={'https://youtube.com'}/>
                </div>
            </div>
        </div>
    );
}

export default Footer;
