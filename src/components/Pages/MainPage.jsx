import React from 'react';
import Header from "../Header/Header";
import Content from "../Content/Content";
import "./mainPage.scss"

function MainPage() {
    return (
        <div className={'container'}>
            <Header/>
            <Content/>
        </div>
    );
}

export default MainPage;