import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './reset.css';
import './App.css';
import { Main, Shop, Detail, Cart } from './pages';
import { PATH } from './constants/path';
import Men from './pages/Shop/Men';
import Women from './pages/Shop/Women';
import Accessories from './pages/Shop/Accessories';
import Shoes from './pages/Shop/Shoes';
import { addUser } from './context/user';

/* prop 타입체크 */
// import PropTypes from 'prop-types';

/* 폰트어썸 */
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

/* 이미지 절대경로 */
// src={`${process.env.PUBLIC_URL}/나머지 폴더 주소`}

function App() {
  const [user, setUser] = useState();
  return (
    <div className="App">
      <addUser.Provider value={{ user, setUser }}>
        <Routes>
          <Route path={PATH.MAIN} element={<Main></Main>}></Route>
          <Route path={PATH.SHOP} element={<Shop></Shop>}>
            <Route path={PATH.MEN} element={<Men></Men>}></Route>
            <Route path={PATH.WOMEN} element={<Women></Women>}></Route>
            <Route path={PATH.ACCESSORIES} element={<Accessories></Accessories>}></Route>
            <Route path={PATH.SHOES} element={<Shoes></Shoes>}></Route>
          </Route>
          <Route path={PATH.DETAIL} element={<Detail></Detail>}></Route>
          <Route path={PATH.CART} element={<Cart></Cart>}></Route>
        </Routes>
      </addUser.Provider>
    </div>
  );
}

/*
Index.propTypes = {
  prop이름: PropTypes.array,
};
*/

export default App;
