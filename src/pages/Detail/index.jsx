import React from 'react';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

export const Detail = () => {
  return (
    <>
      <Navbar></Navbar>
      <section className={styles.section}>
        <div className={styles.item}>
          <div className={styles.item_img}></div>
          <div className={styles.item_info}>
            <em className={styles.type}>SHOES</em>
            <h4 className={styles.name}>Zipped Cardigan cotton</h4>
            <strong className={styles.price}>$33.99</strong>
            <p className={styles.info}>
              Designed for simplicity and made from higher qualities materials. It s sleek geometry and material
              combinations.
            </p>
            <div className={styles.item_size}>
              <strong>SIZE</strong>
              <ul>
                <li>
                  <em>S</em>
                </li>
                <li>
                  <em>M</em>
                </li>
                <li>
                  <em>L</em>
                </li>
                <li>
                  <em>LX</em>
                </li>
              </ul>
            </div>
            <div className={styles.item_color}>
              <strong>COLOR</strong>
              <ul>
                <li style={{ background: `red` }}></li>
                <li style={{ background: `blue` }}></li>
                <li style={{ background: `black` }}></li>
                <li style={{ background: `green` }}></li>
              </ul>
            </div>
            <div className={styles.btn}>
              <div className={styles.count}>
                <FontAwesomeIcon icon={faMinus} className={styles.icon} />
                <em>1</em>
                <FontAwesomeIcon icon={faPlus} className={styles.icon} />
              </div>
              <button className={`${styles.btn1} btn1`}>ADD TO BASKET</button>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Detail;
