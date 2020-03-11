import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import Description from "../CommonComponents/Description";
import Title from "../CommonComponents/Title";
import Image from "../CommonComponents/Image";
import Btn from "../CommonComponents/Btn";
import Icon from "../CommonComponents/Icon";
import {sendMessage} from "../../actions/actionsSendingData";
import Input from "../CommonComponents/Input";
import Video from "../CommonComponents/Video";
import CarouselContent from "../CommonComponents/CarouselContent";
import {currentContentPortfolioBtn} from "../../actions/actionsMainPage";

import Poster from "../../images/portfolio/Rectangle 9.jpg";
import Poster2 from "../../images/portfolio/Rectangle 10.jpg";
import Poster3 from "../../images/portfolio/Rectangle 11.jpg";
import Poster4 from "../../images/portfolio/Rectangle 12.jpg";
import Poster5 from "../../images/portfolio/Rectangle 13.jpg";
import Poster6 from "../../images/portfolio/Rectangle 14.jpg";
import Inst from "../../images/portfolio/Instagram.jpg";
import InstLabel from "../../images/portfolio/Mask Group.png";

import Location from "../../images/contactUs/Location.svg";
import Mail from "../../images/contactUs/mail.svg";
import Mask from "../../images/contactUs/Mask.svg";
import ContactUsImage from "../../images/contactUs/Rectangle 35.jpg";
import Subscribe from "../../images/contactUs/Rectangle 36.jpg";

import "./content.scss";

function Content({aboutImage, offer, offerImage, sendMessage, currentContentPortfolioBtn, currentBtn}) {
    const [dataFields, setDataFields] = useState({});
  //  const [rows, setRows] = useState('');

    const getDataField = (value) => {
        setDataFields({...dataFields, ...value});
    };
    //
    // useEffect(()=>{
    //     setRows(window.innerWidth <= 425 ? 1 : window.innerWidth > 768 ? 3 : 2)
    // });

    const handleClick = (event) => {
        sendMessage(dataFields);
    };

    const handlePortfolioClick = (event) => {
       const text = event.currentTarget.getElementsByTagName('span')[0].innerText;
       const textBtn = text.substr(0, text.indexOf('(')).trim();
       currentContentPortfolioBtn(textBtn.toLowerCase());
    };

    return(
        <div className="content">
            <div>
                <div id={'About'} className={'content-about'}>
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
                <div id={'What we offer?'} className={'content-offer'}>
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
                                <Description infoYouTube = {info} text={info['description']} descriptionClassName={`content-offer-infoBlock-description ${info['key'] && 'last'}`}/>
                            </div>
                        )}
                    </div>
                    <Image wrapperImageClassName={'content-wrapper-image'} imageClassName={'content-offer-image'} imgSrc={offerImage}/>
                    <Btn link={'#contact_us'} variant={'contained'} btnClassName={'content-offer-btn'} text={'Contact us'}/>
                </div>
            </div>

            <div id={'Portfolio'} className={'content-portfolio'}>
                <Title titleClassName={'content-portfolio-title'} text={'portfolio'}/>
                <div className={'content-portfolio-wrapperBtn'}>
                    {['all', 'video', 'photo'].map((value)=>
                        <Btn handleClick={handlePortfolioClick} variant={'outlined'} btnClassName={`content-portfolio-btn ${value === currentBtn && 'active'}`} text={value} portfolioCounter={'432'}/>
                    )}
                    {/*<Btn handleClick={handlePortfolioClick} variant={'outlined'} btnClassName={`content-portfolio-btn ${currentBtn}`} text={'Video'} portfolioCounter={'32'}/>*/}
                    {/*<Btn handleClick={handlePortfolioClick} variant={'outlined'} btnClassName={`content-portfolio-btn ${currentBtn}`} text={'Photo'} portfolioCounter={'400'}/>*/}
                </div>
                <div className={'content-portfolio-posters'}>
                    <div className={'content-portfolio-wrapperPoster'}>
                        <Video poster={Poster}/>
                        <Image imgSrc={Poster2} wrapperImageClassName={'poster'} imageClassName={'posterImage'}/>
                    </div>
                    <div className={'content-portfolio-wrapperPoster'}>
                       <Image imgSrc={Poster3} wrapperImageClassName={'poster'} imageClassName={'posterImage'}/>
                       <Image imgSrc={Poster4} wrapperImageClassName={'poster'} imageClassName={'posterImage'}/>
                    </div>
                    <div className={'content-portfolio-wrapperPoster'}>
                        <Video poster={Poster5}/>
                        <Image imgSrc={Poster6} wrapperImageClassName={'poster'} imageClassName={'posterImage'}/>
                    </div>
                    <div className={'content-portfolio-wrapperPoster'}>
                        <div className={'content-portfolio-instagram'}>
                            <Image imgSrc={InstLabel} imageClassName={'content-portfolio-instagram-image'} wrapperImageClassName={'content-portfolio-instagram-wrapImage'}/>
                            <Description descriptionClassName={'content-portfolio-instagram-description'} text={'Follow us on Instagram'}/>
                            <Btn text={'Go to Instagram'} btnClassName={'content-portfolio-instagram-btn'} variant={'outlined'}/>
                        </div>
                        <Image imgSrc={Inst} wrapperImageClassName={'poster'} imageClassName={'posterImage'}/>
                    </div>
                </div>
                <Btn text={'Show more'} btnClassName={'content-portfolio-btn-showMore'} variant={'outlined'}/>

            </div>
            <div id={'Testimonials'} className={'content-testimonials'}>
                <Title titleClassName={'content-testimonials-title'} text={'testimonials'}/>
                <CarouselContent/>
            </div>

            <div id={'contact_us'}  className={'content-feedBack'}>
                <div className={'content-feedBack-form'}>
                    <Title titleClassName={'content-feedBack-form-title'} text={'SEND US MESSAGE'}/>
                    <Input inputClassName={'content-feedBack-form-input'} fieldName={'Your Name'} getDataField={getDataField} inputType={'text'} fieldType={'name'} title={'Full Name'}/>
                    <Input inputClassName={'content-feedBack-form-input'} fieldName={'Your Email'} getDataField={getDataField} inputType={'email'} fieldType={'email'} title={'Email'}/>
                    <Input inputClassName={'content-feedBack-form-input'} fieldName={'Your Massage'} getDataField={getDataField} inputType={'textarea'} fieldType={'note'} title={'Message'}/>
                    <Btn handleClick={handleClick} variant={'contained'} btnClassName={'content-feedBack-btn'} text={'submit'}/>
                </div>

                <div className={'content-feedBack-contactUs'}>
                    <Title titleClassName={'content-feedBack-title'} text={'Please contact us'}/>
                    <Description text={'We appreciate every client and can make your dreams come true! Do not hesitate to contact us.'}
                                 descriptionClassName={'content-feedBack-description'}/>
                    <div className={'content-feedBack-contactInfo'}>
                        <div className={'content-feedBack-contactInfo-wrapper'}>
                            <Icon image={Location}
                                  iconClassName={'content-feedBack-contactInfo-icon'}
                                  imageIconClassName={'content-feedBack-contactInfo-imageIcon'}/>
                            <Description descriptionClassName={'content-feedBack-contactInfo-description'} text={'385 Noah Place Suite 878'}/>
                        </div>
                        <div className={'content-feedBack-contactInfo-wrapper'}>
                            <Icon image={Mask}
                                  iconClassName={'content-feedBack-contactInfo-icon'}
                                  imageIconClassName={'content-feedBack-contactInfo-imageIcon'}/>
                            <Description descriptionClassName={'content-feedBack-contactInfo-description'} text={'877-255-7945'}/>
                        </div>
                        <div className={'content-feedBack-contactInfo-wrapper'}>
                            <Icon image={Mail}
                                  iconClassName={'content-feedBack-contactInfo-icon'}
                                  imageIconClassName={'content-feedBack-contactInfo-imageIcon'}/>
                            <Description descriptionClassName={'content-feedBack-contactInfo-description'} text={'info@form.com'}/>
                        </div>
                    </div>
                </div>
                <Image imgSrc={ContactUsImage} wrapperImageClassName={'content-feedBack-contactUsImage'} imageClassName={'image'}/>
            </div>
            <div className={'content-subscribe'}>
                <div className={'content-subscribe-wrapper'}>
                    <Title text={'Subscribe for updates'} titleClassName={'content-subscribe-title'}/>
                    <div className={'content-subscribe-form'}>
                        <Input fieldType={'subscribe'} inputType={'email'} inputClassName={'content-subscribe-input'} fieldName={'Your Email'}/>
                        <Btn text={'subscribe'} variant={'contained'} btnClassName={'content-subscribe-btn'}/>
                    </div>
                    <Description text={'We value your privacy. None of the details supplied will be shared with external parties'} descriptionClassName={'content-subscribe-description'}/>
                </div>
                <Image imgSrc={Subscribe} imageClassName={'content-subscribe-image'} wrapperImageClassName={'content-subscribe-wrapperImage'}/>
            </div>
        </div>
    );
}

const mapStateToProps = (store) => ({
    aboutImage:store.mainPage.aboutImage,
    offer:store.mainPage.offer,
    offerImage:store.mainPage.offerImage,
    currentBtn: store.mainPage.currentBtn,
});

const mapDispatchToProps = {
    sendMessage,
    currentContentPortfolioBtn
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);