import React from 'react';
import styles from './style.module.css';

const Index = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <div className={`${styles.dot} ${styles.dot_1}`}></div>
        <div className={`${styles.dot} ${styles.dot_2}`}></div>
        <div className={`${styles.dot} ${styles.dot_3}`}></div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Index;
