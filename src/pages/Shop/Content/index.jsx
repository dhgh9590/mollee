import React from 'react';
import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faHeart } from '@fortawesome/free-solid-svg-icons';

const Index = () => {
  return (
    <section className={styles.section}>
      <div className={styles.top_menu}>
        <div className={styles.item_count}>
          <strong>25</strong>
          <em>Products Found</em>
        </div>
        <div className={styles.item_filter}>
          <p>
            sort by:
            <strong>
              Popularity <FontAwesomeIcon icon={faAngleDown} className={styles.icon} />
            </strong>
          </p>
        </div>
      </div>
      <div className={styles.item_wrap}>
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
              <em>HOT</em>
              <FontAwesomeIcon icon={faHeart} className={styles.icon} />
            </div>
            <div className={styles.item}>
              <div className={styles.img}>
                <img src={`${process.env.PUBLIC_URL}/images/section2_1.png`} alt="" />
              </div>
              <div className={styles.text}>
                <em>ACCESSORY</em>
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
                <img src={`${process.env.PUBLIC_URL}/images/section2_1.png`} alt="" />
              </div>
              <div className={styles.text}>
                <em>SHOES</em>
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
                <img src={`${process.env.PUBLIC_URL}/images/section2_1.png`} alt="" />
              </div>
              <div className={styles.text}>
                <em>HANDBAG</em>
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
              <em>HOT</em>
              <FontAwesomeIcon icon={faHeart} className={styles.icon} />
            </div>
            <div className={styles.item}>
              <div className={styles.img}>
                <img src={`${process.env.PUBLIC_URL}/images/section2_1.png`} alt="" />
              </div>
              <div className={styles.text}>
                <em>ACCESSORY</em>
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
                <img src={`${process.env.PUBLIC_URL}/images/section2_1.png`} alt="" />
              </div>
              <div className={styles.text}>
                <em>SHOES</em>
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
                <img src={`${process.env.PUBLIC_URL}/images/section2_1.png`} alt="" />
              </div>
              <div className={styles.text}>
                <em>HANDBAG</em>
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
              <em>HOT</em>
              <FontAwesomeIcon icon={faHeart} className={styles.icon} />
            </div>
            <div className={styles.item}>
              <div className={styles.img}>
                <img src={`${process.env.PUBLIC_URL}/images/section2_1.png`} alt="" />
              </div>
              <div className={styles.text}>
                <em>ACCESSORY</em>
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
                <img src={`${process.env.PUBLIC_URL}/images/section2_1.png`} alt="" />
              </div>
              <div className={styles.text}>
                <em>SHOES</em>
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
                <img src={`${process.env.PUBLIC_URL}/images/section2_1.png`} alt="" />
              </div>
              <div className={styles.text}>
                <em>HANDBAG</em>
                <h4>Cotton T-shirt</h4>
                <strong>$35.99</strong>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.more}>
        <button className={`${styles.btn1} btn1`}> LOAD MORE</button>
      </div>
    </section>
  );
};

export default Index;
