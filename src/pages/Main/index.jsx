import React, { useContext, useState } from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import Banner from './Banner';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import './common.css';
import useWish from '../../hooks/useWish';
import { addUser } from '../../context/user';
import { useEffect } from 'react';

export const Main = () => {
  const { user } = useContext(addUser);
  const { addWishs } = useWish();
  const [wishId, setWishId] = useState();

  const handleWish = item => {
    addWishs.mutate((user && user.uid, item));
  };
  const {
    cartQuery: { data: products },
  } = useWish();

  const wishFilter = () => {
    const copy = products && [...products];
    const newCopy =
      copy &&
      copy.map(item => {
        return item.id;
      });
    setWishId(newCopy);
  };

  useEffect(() => {
    wishFilter();
  }, [products]);

  return (
    <>
      <NavBar></NavBar>
      <main>
        <Banner></Banner>
        <Section1></Section1>
        <Section2 handleWish={handleWish} wishId={wishId}></Section2>
        <Section3></Section3>
        <Section4 handleWish={handleWish} wishId={wishId}></Section4>
        <Section5></Section5>
      </main>
      <Footer></Footer>
    </>
  );
};

export default Main;
