import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header';
import RegBanner from '../Main/Banner/RegBanner';
import Getapp from "../Main/Get-the-app/Getapp";
import Banner from './Banner/Banner';
import Content from './Content/Content';

const Search = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Content />
            <Getapp />
            <RegBanner />
            <Footer />
        </div>
    )
}
export default Search; 