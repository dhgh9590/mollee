import React, { useEffect } from 'react';
import useScrollTop from '../../../hooks/useScrollTop';
import Header from '../Header';
import Content from '../Content';

const Index = () => {
  const scrollTop = useScrollTop();
  useEffect(() => {
    scrollTop;
  }, []);
  return (
    <div>
      <Header
        title={`Newest Shoes`}
        content={`Casual linen. Shirt design. 100% suede leather. Backstitch elbow patch`}
      ></Header>
      <Content type={`Shoes`}></Content>
    </div>
  );
};

export default Index;
