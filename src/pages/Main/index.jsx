import React from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Banner from './Banner';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import './common.css';

export const Main = () => {
  return (
    <>
      <NavBar></NavBar>
      <main>
        <Banner></Banner>
        <Section1></Section1>
        <Section2></Section2>
        <Section3></Section3>
        <Section4></Section4>
        <Section5></Section5>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Main;
