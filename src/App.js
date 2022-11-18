import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './reset.css';
import './App.css';
import { Main, Shop, Detail, Cart, Admin, Wish } from './pages';
import { PATH } from './constants/path';
import Men from './pages/Shop/Men';
import Women from './pages/Shop/Women';
import Accessories from './pages/Shop/Accessories';
import Shoes from './pages/Shop/Shoes';
import { addUser } from './context/user';

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
          <Route path={PATH.ADMIN} element={<Admin></Admin>}></Route>
          <Route path={PATH.WISH} element={<Wish></Wish>}></Route>
        </Routes>
      </addUser.Provider>
    </div>
  );
}

export default App;
