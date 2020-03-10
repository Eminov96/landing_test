import React from 'react';
import Header from "../Header/Header";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";
import "./mainPage.scss"

function MainPage() {
    return (
        <div className={'container'}>
            <Header/>
            <Content/>
            {/*<Footer/>*/}
        </div>
    );
}

export default MainPage;