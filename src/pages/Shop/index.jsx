import React from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

import { Outlet } from 'react-router-dom';

export const Shop = () => {
  return (
    <>
      <NavBar></NavBar>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Shop;
