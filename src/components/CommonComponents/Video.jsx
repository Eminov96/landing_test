import React from 'react';
import { Player } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css";
//import "~video-react/styles/scss/video-react"; // or import scss

function Video({poster}) {

    const handledClick = (event) => {
        event.currentTarget.getElementsByClassName('video-react-big-play-button-left')[0].setAttribute("style", "display: none");
    };

    return (
        <div className={'wrapperPoster'} onClick={handledClick}>
            <Player
                playsInline
                poster={poster}
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
            />
        </div>
        );
}

export default Video;