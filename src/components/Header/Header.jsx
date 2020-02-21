import React from 'react';
import Logo from "../CommonComponents/Logo";
import Menu from "../CommonComponents/Menu";
import Title from "../CommonComponents/Title";
import Description from "../CommonComponents/Description";
import Btn from "../CommonComponents/Btn";
import Slider from "../CommonComponents/Slider";

function Header() {
    return (
        <div className="header">
            <div>
                <Logo logoImageClassName={''} logoClassName={''} imgSrc={'#'}/>
                <Menu list={['Home', 'About', 'What we offer?', 'Portfolio', 'Testimonials']} listClass={'listClass'} tabClass={'tabClass'}/>
                <div className={'headerContent'}>
                    <Title titleClassName={''}/>
                    <Description descriptionClassName={''}/>
                    <Btn variant={'contained'} btnClassName={''} text={'Contact us'}/>
                </div>
            </div>
            <Slider/>
        </div>
    );
}

export default Header;
