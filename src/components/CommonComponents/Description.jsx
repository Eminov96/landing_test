import React from 'react';
import Icon from "./Icon";


function Description({descriptionClassName, text, infoYouTube}) {
    return (
        <p className={descriptionClassName}>{text}

            {
                infoYouTube && infoYouTube['youtube'] &&
                    <div className={'content-offer-infoBlock-youtubeWrapper'}>
                        <Icon image={infoYouTube && infoYouTube['iconYoutube']} iconClassName={`content-offer-infoBlock-innerIcon`}/>
                        <p className={'content-offer-infoBlock-description-youtube'}>Check our Youtube</p>
                    </div>
            }
        </p>
    );
}

export default Description;