import React from 'react';
import Header from '../Header';
import Content from '../Content';
import useScrollTop from '../../../hooks/useScrollTop';
import { useEffect } from 'react';

const Index = () => {
  const scrollTop = useScrollTop();
  useEffect(() => {
    scrollTop;
  }, []);
  return (
    <div>
      <Header
        title={`Newest Accessories`}
        content={`Casual linen. Shirt design. 100% suede leather. Backstitch elbow patch`}
      ></Header>
      <Content></Content>
    </div>
  );
};

export default Index;
