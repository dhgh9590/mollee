import React from 'react';
import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaravan, faPhoneAlt, faWallet } from '@fortawesome/free-solid-svg-icons';

const Index = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sale}>
          <div className={styles.text}>
            <div className={styles.sub_title}>
              <strong>DEAL</strong>
              <em>OF THE WEEK</em>
            </div>
            <div className={styles.title}>
              <h2>
                Stay Warm <br />
                And Trendy
              </h2>
            </div>
            <div className={styles.time}>
              <ul>
                <li>
                  <em>12</em>
                  <p>days</p>
                </li>
                <li>
                  <em>06</em>
                  <p>hours</p>
                </li>
                <li>
                  <em>49</em>
                  <p>mins</p>
                </li>
                <li>
                  <em>: 27</em>
                  <p>sec</p>
                </li>
              </ul>
            </div>
            <button className={`${styles.btn1} btn1`}>Shop Now</button>
          </div>
          <div className={styles.img}>
            <img src={`${process.env.PUBLIC_URL}/images/section3.png`} alt="" />
          </div>
        </div>
        <div className={styles.faq}>
          <ul>
            <li>
              <FontAwesomeIcon icon={faCaravan} className={styles.icon} />
              <h2>Free Shipping</h2>
              <span></span>
              <p>Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim veilit</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhoneAlt} className={styles.icon} />
              <h2>24/7 Customer Service</h2>
              <span></span>
              <p>Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim veilit</p>
            </li>
            <li>
              <FontAwesomeIcon icon={faWallet} className={styles.icon} />
              <h2>Money Back Guarantee</h2>
              <span></span>
              <p>Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim veilit</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Index;
