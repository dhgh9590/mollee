import React from 'react';
import styles from './style.module.css';

const Index = () => {
  return (
    <section className={styles.section}>
      <div className={styles.count}>
        <em>2587 +</em>
        <p>Products for you</p>
      </div>
      <div className={styles.item_wrap}>
        <ul>
          <li>
            <div className={styles.item}>
              <p>ACCESSORIES</p>
              <div className={styles.text}>
                <div className={styles.sub_title}>
                  <strong>MEN</strong>
                  <em>ACCESSORIES</em>
                </div>
                <div className={styles.title}>
                  <h3>
                    Fashion Fro <br /> This Summer
                  </h3>
                </div>
                <div className={styles.btn}>
                  <span></span>
                  <em>Shop Now</em>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.item}>
              <p>SWETERS</p>
              <div className={styles.text}>
                <div className={styles.sub_title}>
                  <strong>MEN</strong>
                  <em>COLLECTION</em>
                </div>
                <div className={styles.title}>
                  <h3>
                    New Autumn <br />
                    Arrivals 2022
                  </h3>
                </div>
                <div className={styles.btn}>
                  <span></span>
                  <em>Shop Now</em>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.item}>
              <em>SEASON</em>
              <h2>SALE</h2>
              <p>
                Non aliqua reprehenderit <br />
                reprehenderit culpa laboris nulla
              </p>
              <div className={styles.btn}>
                <span></span>
                <em>Shop Now</em>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.item}>
              <p>DRESSES</p>
              <div className={styles.text}>
                <div className={styles.sub_title}>
                  <strong>MEN</strong>
                  <em>COLLECTION</em>
                </div>
                <div className={styles.title}>
                  <h3>
                    Trendy Look
                    <br />
                    For Every Day
                  </h3>
                </div>
                <div className={styles.btn}>
                  <span></span>
                  <em>Shop Now</em>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <button className={`${styles.btn1} btn1`}>View All Collections</button>
    </section>
  );
};

export default Index;
