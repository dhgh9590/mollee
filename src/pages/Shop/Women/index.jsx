import React, { useEffect } from 'react';
import Header from '../Header';
import Content from '../Content';
import useScrollTop from '../../../hooks/useScrollTop';

const Index = () => {
  const scrollTop = useScrollTop();
  useEffect(() => {
    scrollTop;
  }, []);
  return (
    <div>
      <Header
        title={`Newest Women Clothing`}
        content={`Casual linen. Shirt design. 100% suede leather. Backstitch elbow patch`}
      ></Header>
      <Content></Content>
    </div>
  );
};

export default Index;
