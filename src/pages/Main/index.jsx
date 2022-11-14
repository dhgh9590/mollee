import React from 'react';
import NavBar from '../../components/NavBar';
import Banner from './Banner';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css';

export const Main = () => {
  return (
    <>
      <NavBar></NavBar>
      <main>
        <Banner></Banner>
      </main>
    </>
  );
};

export default Main;
