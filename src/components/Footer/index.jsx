import React from 'react';
import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Index = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ul>
          <li>
            <div className={styles.item1}>
              <p>
                Cillum eu id enim aliqup aute ullamco anim. <br />
                Culpa deserunt nostrud excepteur voluptate.
              </p>
              <span></span>
              <div className={styles.find}>
                <h5>Find us here:</h5>
                <ul>
                  <li>
                    <em>FB</em>
                  </li>
                  <li>
                    <em>TW</em>
                  </li>
                  <li>
                    <em>INS</em>
                  </li>
                  <li>
                    <em>PT</em>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.item2}>
              <div className={`${styles.menu1} ${styles.menu}`}>
                <h6>About</h6>
                <ul>
                  <li>
                    <span></span>
                    <em>About US</em>
                  </li>
                  <li>
                    <span></span>
                    <em>Collecticns</em>
                  </li>
                  <li>
                    <span></span>
                    <em>Shop</em>
                  </li>
                  <li>
                    <span></span>
                    <em>Blog</em>
                  </li>
                </ul>
              </div>
              <div className={`${styles.menu2} ${styles.menu}`}>
                <h6>Useful Links</h6>
                <ul>
                  <li>
                    <span></span>
                    <em>Privacy Policy</em>
                  </li>
                  <li>
                    <span></span>
                    <em>Terms of use</em>
                  </li>
                  <li>
                    <span></span>
                    <em>Support</em>
                  </li>
                  <li>
                    <span></span>
                    <em>Shipping details</em>
                  </li>
                  <li>
                    <span></span>
                    <em>FAQs</em>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.item3}>
              <h6>Newsletter</h6>
              <p>
                Subscribe to be the first to hear about deals. offers and <br />
                upcoming collections.
              </p>
              <div className={styles.email}>
                <strong>Enter your email</strong>
                <FontAwesomeIcon icon={faPaperPlane} className={styles.icon} />
              </div>
              <span></span>
            </div>
          </li>
        </ul>
        <span></span>
        <div className={styles.possession}>
          <em>© All right reserved. Fashionee 2022</em>
          <div className={styles.payment}>
            <em>Payment Methods</em>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Index;
