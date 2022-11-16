import React from 'react';
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

export const Cart = () => {
  const { user } = useContext(addUser);
  const navigate = useNavigate();

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
            <ul>
              <li>
                <div className={styles.item}>
                  <div className={styles.item_info}>
                    <div className={styles.item_img}></div>
                    <div className={styles.item_text}>
                      <h2>Zipped Cargigan cotton</h2>
                      <em>SHOES</em>
                    </div>
                  </div>
                  <div className={styles.item_price}>
                    <em>$110.00</em>
                  </div>
                  <div className={styles.item_quantity}>
                    <div className={styles.count}>
                      <FontAwesomeIcon icon={faMinus} className={styles.icon} />
                      <em>1</em>
                      <FontAwesomeIcon icon={faPlus} className={styles.icon} />
                    </div>
                  </div>
                  <div className={styles.item_subtotal}>
                    <em>$110.00</em>
                    <FontAwesomeIcon icon={faTimes} className={styles.icon} />
                  </div>
                </div>
              </li>
              <li>
                <div className={styles.item}>
                  <div className={styles.item_info}>
                    <div className={styles.item_img}></div>
                    <div className={styles.item_text}>
                      <h2>Zipped Cargigan cotton</h2>
                      <em>SHOES</em>
                    </div>
                  </div>
                  <div className={styles.item_price}>
                    <em>$110.00</em>
                  </div>
                  <div className={styles.item_quantity}>
                    <div className={styles.count}>
                      <FontAwesomeIcon icon={faMinus} className={styles.icon} />
                      <em>1</em>
                      <FontAwesomeIcon icon={faPlus} className={styles.icon} />
                    </div>
                  </div>
                  <div className={styles.item_subtotal}>
                    <em>$110.00</em>
                    <FontAwesomeIcon icon={faTimes} className={styles.icon} />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.order}>
          <div className={styles.order_summary}>
            <h4>Order Summary</h4>
            <span></span>
            <ul>
              <li>
                <em>subtotal</em>
                <strong>$110.00</strong>
              </li>
              <li>
                <em>subtotal</em>
                <strong>$110.00</strong>
              </li>
            </ul>
          </div>
          <span></span>
          <div className={styles.total}>
            <em>TOTAL</em>
            <strong>$110.00</strong>
          </div>
          <button className={`${styles.btn1} btn1`}>PROCEED TO CHECKOUT</button>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Cart;
