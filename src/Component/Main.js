import React from 'react';
import Footer from './Footer/Footer';
import Header from "./Header.js";
import RegBanner from './Main/Banner/RegBanner';
import Cardmain from './Main/Cards/Cardmain';
import Getapp from './Main/Get-the-app/Getapp';
import HeaderImg from './Main/HeaderImg';

const Main = () => {
  return (
    <div>
    <Header />
    <HeaderImg />
    <Cardmain />
    <Getapp />
    <RegBanner />
    <Footer />
    </div>
  )
}
export default Main;