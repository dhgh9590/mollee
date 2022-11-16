import React from 'react';
import { useState } from 'react';
import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Index = () => {
  const [menuActive, setMenuActive] = useState(0);
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sub_title}>
          <strong>NEW</strong>
          <em>COLLECTIONS</em>
        </div>
        <div className={styles.title}>
          <h2>Featured Products</h2>
        </div>
        <div className={styles.menu}>
          <ul>
            <li
              className={`${menuActive == 0 && styles.active}`}
              onClick={() => {
                setMenuActive(0);
              }}
            >
              <em>All</em>
            </li>
            <li
              className={`${menuActive == 1 && styles.active}`}
              onClick={() => {
                setMenuActive(1);
              }}
            >
              <em>Men</em>
            </li>
            <li
              className={`${menuActive == 2 && styles.active}`}
              onClick={() => {
                setMenuActive(2);
              }}
            >
              <em>Women</em>
            </li>
            <li
              className={`${menuActive == 3 && styles.active}`}
              onClick={() => {
                setMenuActive(3);
              }}
            >
              <em>Accessories</em>
            </li>
            <li
              className={`${menuActive == 4 && styles.active}`}
              onClick={() => {
                setMenuActive(4);
              }}
            >
              <em>Shoes</em>
            </li>
          </ul>
        </div>
        <div className={styles.item_list}>
          <ul>
            <li>
              <div className={styles.heart}>
                <em>NEW</em>
                <FontAwesomeIcon icon={faHeart} className={styles.icon} />
              </div>
              <div className={styles.item}>
                <div className={styles.img}>
                  <img src={`${process.env.PUBLIC_URL}/images/section2_1.png`} alt="" />
                </div>
                <div className={styles.text}>
                  <em>SHIRTS</em>
                  <h4>Cotton T-shirt</h4>
                  <strong>$35.99</strong>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.heart}>
                <p></p>
                <FontAwesomeIcon icon={faHeart} className={styles.icon} />
              </div>
              <div className={styles.item}>
                <div className={styles.img}>
                  <img src={`${process.env.PUBLIC_URL}/images/section2_2.png`} alt="" />
                </div>
                <div className={styles.text}>
                  <h4>Cotton T-shirt</h4>
                  <strong>$35.99</strong>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.heart}>
                <em>NEW</em>
                <FontAwesomeIcon icon={faHeart} className={styles.icon} />
              </div>
              <div className={styles.item}>
                <div className={styles.img}>
                  <img src={`${process.env.PUBLIC_URL}/images/section2_3.png`} alt="" />
                </div>
                <div className={styles.text}>
                  <h4>Cotton T-shirt</h4>
                  <strong>$35.99</strong>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.heart}>
                <p></p>
                <FontAwesomeIcon icon={faHeart} className={styles.icon} />
              </div>
              <div className={styles.item}>
                <div className={styles.img}>
                  <img src={`${process.env.PUBLIC_URL}/images/section2_4.png`} alt="" />
                </div>
                <div className={styles.text}>
                  <h4>Cotton T-shirt</h4>
                  <strong>$35.99</strong>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.heart}>
                <em>NEW</em>
                <FontAwesomeIcon icon={faHeart} className={styles.icon} />
              </div>
              <div className={styles.item}>
                <div className={styles.img}>
                  <img src={`${process.env.PUBLIC_URL}/images/section2_5.png`} alt="" />
                </div>
                <div className={styles.text}>
                  <h4>Cotton T-shirt</h4>
                  <strong>$35.99</strong>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.heart}>
                <p></p>
                <FontAwesomeIcon icon={faHeart} className={styles.icon} />
              </div>
              <div className={styles.item}>
                <div className={styles.img}>
                  <img src={`${process.env.PUBLIC_URL}/images/section2_6.png`} alt="" />
                </div>
                <div className={styles.text}>
                  <h4>Cotton T-shirt</h4>
                  <strong>$35.99</strong>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.heart}>
                <em>NEW</em>
                <FontAwesomeIcon icon={faHeart} className={styles.icon} />
              </div>
              <div className={styles.item}>
                <div className={styles.img}>
                  <img src={`${process.env.PUBLIC_URL}/images/section2_7.png`} alt="" />
                </div>
                <div className={styles.text}>
                  <h4>Cotton T-shirt</h4>
                  <strong>$35.99</strong>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.heart}>
                <p></p>
                <FontAwesomeIcon icon={faHeart} className={styles.icon} />
              </div>
              <div className={styles.item}>
                <div className={styles.img}>
                  <img src={`${process.env.PUBLIC_URL}/images/section2_8.png`} alt="" />
                </div>
                <div className={styles.text}>
                  <h4>Cotton T-shirt</h4>
                  <strong>$35.99</strong>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <button className={`${styles.btn1} btn1`}>See All Products</button>
      </div>
    </section>
  );
};

export default Index;
