import React from 'react';
import {connect} from "react-redux";
import Description from "../CommonComponents/Description";
import Title from "../CommonComponents/Title";
import Image from "../CommonComponents/Image";
import Btn from "../CommonComponents/Btn";

import "./content.scss";
import {Link} from "react-router-dom";
import Icon from "../CommonComponents/Icon";

function Content({aboutImage, offer}) {
    return(
        <div className="content">
            <div className={'content-about'}>
                <Image wrapperImageClassName={'content-wrapper-image'} imageClassName={'content-about-image'} imgSrc={aboutImage}/>
                <div className={'aboutInfoMessage'}>
                    {/*Link*/}
                    <Title titleClassName={'content-about-link-title'} text={'wedding photo video'}/>
                    <Title titleClassName={'content-about-title'} text={'Why do we differ from others?'}/>
                    <Description descriptionClassName={'content-about-description'} text={
                        'On your wedding day, the photographer and cinematographer can become interlopers to your day. We do things differently.' +
                        'Your relationship and your wedding day are entirely unique. We are there to blend so seamlessly in ' +
                        'to the defining moments that you are always at ease, always natural. The result is that we capture ' +
                        'the essence which makes your special day what it is in a story-telling style. ' +
                        'We feel honoured to fulfil this role. ' +
                        'We care deeply that we preserve a true and inspiring portrayal of your day. '}/>
                    <Btn text={'Check our blog'} variant={'outlined'} btnClassName={'content-about-btn'}/>
                </div>
            </div>
            <div className={'content-offer'}>
                <div className={'content-offer-info'}>
                    <Title titleClassName={'content-offer-title'} text={'What we offer'}/>
                    {offer && offer.map((info)=>
                        <div>
                            <div>
                                <Icon iconHref={info['icon']}/>
                                <Title text={info['title']}/>
                            </div>
                            <Description />
                        </div>
                    )}
                </div>
                <Image wrapperImageClassName={'content-wrapper-image'} imageClassName={'content-offer-image'} imgSrc={''}/>
            </div>
        </div>
    );
}

const mapStateToProps = (store) => ({
    aboutImage:store.mainPage.aboutImage,
    offer:store.mainPage.offer,
});



export default connect(mapStateToProps)(Content);