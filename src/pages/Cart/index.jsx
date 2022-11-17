import React, { useState } from 'react';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { addUser } from '../../context/user';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../constants/path';
import useCart from '../../hooks/useCart';

export const Cart = () => {
  const { user } = useContext(addUser);
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState();
  const {
    cartQuery: { data: products },
  } = useCart();
  const { addOrUpdateItem, removeItem } = useCart();

  //아이템 갯수 마이너스
  const handleMinus = data => {
    if (data.count < 2) return;
    addOrUpdateItem.mutate({ ...data, count: data.count - 1 });
  };

  //아이템 갯수 플러스
  const handlePlus = data => {
    addOrUpdateItem.mutate({ ...data, count: data.count + 1 });
  };

  //아이템 삭제
  const handleDelete = data => {
    removeItem.mutate(data.id);
  };

  //토탈 가격
  useEffect(() => {
    if (products && products.length > 1) {
      const price = products && products.reduce((a, b) => a.price * a.count + b.price * b.count); //장바구니 가격 더하기
      setTotalPrice(price);
    } else if (products && products.length == 1) {
      setTotalPrice(products[0].price * products[0].count);
    }
  }, [products]);

  useEffect(() => {
    user === null ? navigate(PATH.MAIN) : null;
  }, [user]);

  return (
    <>
      <Navbar></Navbar>
      <header className={styles.header}>
        <h2 className={styles.title}>Shopping Cart</h2>
      </header>
      <section className={styles.section}>
        <div className={styles.content}>
          <div className={styles.title}>
            <em className={styles.product}>PRODUCT</em>
            <em className={styles.price}>PRICE</em>
            <em className={styles.quantity}>QUANTITY</em>
            <em className={styles.subtotal}>SUBTOTAL</em>
          </div>
          <div className={styles.item_list}>
            {products && (
              <ul>
                {products.map(item => {
                  return (
                    <li key={item.id}>
                      <div className={styles.item}>
                        <div className={styles.item_info}>
                          <div className={styles.item_img}>
                            <img src={item.img} alt="이미지" />
                          </div>
                          <div className={styles.item_text}>
                            <h2>
                              {item.name} ({item.color})
                            </h2>
                            <em>{item.type}</em>
                          </div>
                        </div>
                        <div className={styles.item_price}>
                          <em>${item.price}</em>
                        </div>
                        <div className={styles.item_quantity}>
                          <div className={styles.count}>
                            <FontAwesomeIcon
                              icon={faMinus}
                              className={styles.icon}
                              onClick={() => {
                                handleMinus(item);
                              }}
                            />
                            <em>{item.count}</em>
                            <FontAwesomeIcon
                              icon={faPlus}
                              className={styles.icon}
                              onClick={() => {
                                handlePlus(item);
                              }}
                            />
                          </div>
                        </div>
                        <div className={styles.item_subtotal}>
                          <em>{item.price * item.count}</em>
                          <FontAwesomeIcon
                            icon={faTimes}
                            className={styles.icon}
                            onClick={() => {
                              handleDelete(item);
                            }}
                          />
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
        <div className={styles.order}>
          <div className={styles.order_summary}>
            <h4>Order Summary</h4>
            <span></span>
            {products && (
              <ul>
                {products.map(item => {
                  return (
                    <li key={item.id}>
                      <em>{item.name}</em>
                      <strong>${item.price * item.count}</strong>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
          <span></span>
          <div className={styles.total}>
            <em>TOTAL</em>
            <strong>${totalPrice && totalPrice}</strong>
          </div>
          <button className={`${styles.btn1} btn1`}>PROCEED TO CHECKOUT</button>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Cart;
