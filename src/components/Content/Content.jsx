import React, {useState} from 'react';
import {connect} from "react-redux";
import Description from "../CommonComponents/Description";
import Title from "../CommonComponents/Title";
import Image from "../CommonComponents/Image";
import Btn from "../CommonComponents/Btn";
import Icon from "../CommonComponents/Icon";
import {sendMessage} from "../../actions/actionsSendingData";
import Input from "../CommonComponents/Input";
import Video from "../CommonComponents/Video";

import Poster from "../../images/portfolio/Rectangle 9.jpg";
import Poster2 from "../../images/portfolio/Rectangle 10.jpg";
import Poster3 from "../../images/portfolio/Rectangle 11.jpg";
import Poster4 from "../../images/portfolio/Rectangle 12.jpg";
import Poster5 from "../../images/portfolio/Rectangle 13.jpg";
import Poster6 from "../../images/portfolio/Rectangle 14.jpg";
import CarouselContent from "../CommonComponents/CarouselContent";
import "./content.scss";

function Content({aboutImage, offer, offerImage, sendMessage}) {
    const [dataFields, setDataFields] = useState({});

    const getDataField = (value) => {
        setDataFields({...dataFields, ...value});
    };

    const handleClick = (event) => {
        sendMessage(dataFields);
    };

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
            <div className={'content-portfolio'}>
                <Title titleClassName={'content-portfolio-title'} text={'portfolio'}/>
                <div>
                    <Btn variant={'contained'} btnClassName={'content-offer-btn'} text={'All'}/>
                    <Btn variant={'contained'} btnClassName={'content-offer-btn'} text={'Video'}/>
                    <Btn variant={'contained'} btnClassName={'content-offer-btn'} text={'Photo'}/>
                </div>
                <div className={'content-portfolio-posters'}>
                    <Video poster={Poster}/>
                    <Image imgSrc={Poster2} wrapperImageClassName={'poster a'} imageClassName={'posterImage'}/>
                    <Image imgSrc={Poster3} wrapperImageClassName={'poster b'} imageClassName={'posterImage'}/>
                    <Image imgSrc={Poster4} wrapperImageClassName={'poster c'} imageClassName={'posterImage'}/>
                    <Video poster={Poster5}/>
                    <Image imgSrc={Poster6} wrapperImageClassName={'poster f'} imageClassName={'posterImage'}/>
                    {/*<Image imgSrc={Poster7} wrapperImageClassName={'poster g'} imageClassName={'posterImage'}/>*/}
                </div>
            </div>
            <div className={'content-testimonials'}>
                <Title titleClassName={'content-testimonials-title'} text={'testimonials'}/>
                <CarouselContent rows={3}/>
            </div>

            <div className={'content-feedBack'}>
                <div className={'content-feedBack-form'}>
                    <Title titleClassName={'content-feedBack-title'} text={'SEND US MESSAGE'}/>

                    <Input inputClassName={'content-feedBack-input'} fieldName={'Your Name'} getDataField={getDataField} inputType={'text'} fieldType={'name'} title={'Full Name'}/>
                    <Input inputClassName={'content-feedBack-input'} fieldName={'Your Email'} getDataField={getDataField} inputType={'email'} fieldType={'email'} title={'Email'}/>
                    <Input inputClassName={'content-feedBack-input'} fieldName={'Your Massage'} getDataField={getDataField} inputType={'textarea'} fieldType={'note'} title={'Message'}/>
                    <Btn handleClick={handleClick} variant={'contained'} btnClassName={'content-feedBack-btn'} text={'submit'}/>
                </div>

            </div>
        </div>
    );
}

const mapStateToProps = (store) => ({
    aboutImage:store.mainPage.aboutImage,
    offer:store.mainPage.offer,
    offerImage:store.mainPage.offerImage
});

const mapDispatchToProps = {
    sendMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);