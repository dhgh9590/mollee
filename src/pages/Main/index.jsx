import React from 'react';
import NavBar from '../../components/NavBar';
import Banner from './Banner';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
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
        <Section1></Section1>
        <Section2></Section2>
        <Section3></Section3>
      </main>
    </>
  );
};

export default Main;
