import React from 'react';
import {connect} from "react-redux";
import Description from "../CommonComponents/Description";
import Title from "../CommonComponents/Title";
import Image from "../CommonComponents/Image";
import Btn from "../CommonComponents/Btn";
import Icon from "../CommonComponents/Icon";
import "./content.scss";

function Content({aboutImage, offer, offerImage}) {
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
                <div>

                </div>
                <div className={'content-offer-info'}>
                    <Title titleClassName={'content-offer-title'} text={'What we offer'}/>
                    {offer && offer.map((info)=>
                        <div className={`content-offer-infoBlock ${info['key'] && 'last'}`}>
                            <div className={`content-offer-wrapper-title ${info['key'] && 'last'}`}>
                                {info['key'] && <span className={'first'}></span>}
                                <Icon image={info['icon']} iconClassName={`content-offer-infoBlock-icon ${info['key'] && 'last'}`}/>
                                {info['key'] && <span className={'second'}></span>}
                                <Title text={info['title']} titleClassName={`content-offer-infoBlock-title ${info['key'] && 'last'}`}/>
                            </div>
                            <Description text={info['description']} descriptionClassName={`content-offer-infoBlock-description ${info['key'] && 'last'}`}/>
                        </div>
                    )}
                </div>
                <Image wrapperImageClassName={'content-wrapper-image'} imageClassName={'content-offer-image'} imgSrc={offerImage}/>
                <Btn variant={'contained'} btnClassName={'content-offer-btn'} text={'Contact us'}/>
            </div>
        </div>
    );
}

const mapStateToProps = (store) => ({
    aboutImage:store.mainPage.aboutImage,
    offer:store.mainPage.offer,
    offerImage:store.mainPage.offerImage
});



export default connect(mapStateToProps)(Content);