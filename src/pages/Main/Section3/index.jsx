import React from 'react';
import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaravan, faPhoneAlt, faWallet } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { useState } from 'react';
import { PATH } from '../../../constants/path';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const [time, setTime] = useState();
  const navigate = useNavigate();

  //남은 시간 꼐산
  const countDown = () => {
    const masTime = new Date('2022-12-31');
    const todayTime = new Date();
    const totalTime = masTime - todayTime;
    const Day = String(Math.floor(totalTime / (1000 * 60 * 60 * 24)));
    const Hour = String(Math.floor((totalTime / (1000 * 60 * 60)) % 24)).padStart(2, '0');
    const Min = String(Math.floor((totalTime / (1000 * 60)) % 60)).padStart(2, '0');
    const Sec = String(Math.floor((totalTime / 1000) % 60)).padStart(2, '0');
    setTime([Day, Hour, Min, Sec]);
  };

  useEffect(() => {
    const time = setInterval(countDown, 1000);

    return () => {
      clearInterval(time);
    };
  }, []);

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
                  <em>{time && time[0]}</em>
                  <p>days</p>
                </li>
                <li>
                  <em>{time && time[1]}</em>
                  <p>hours</p>
                </li>
                <li>
                  <em>{time && time[2]}</em>
                  <p>mins</p>
                </li>
                <li>
                  <em>: {time && time[3]}</em>
                  <p>sec</p>
                </li>
              </ul>
            </div>
            <button
              className={`${styles.btn1} btn1`}
              onClick={() => {
                navigate(`${PATH.SHOP}/${PATH.MEN}`);
              }}
            >
              Shop Now
            </button>
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
