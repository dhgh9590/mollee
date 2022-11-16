import React from 'react';
import styles from './style.module.css';

const Index = () => {
  return (
    <section className={styles.section}>
      <div className={styles.sub_title}>
        <strong>OUR</strong>
        <em>BLOG</em>
      </div>
      <div className={styles.title}>
        <h2>The Last ln Mollee</h2>
        <p>
          Cillum eu id enim aliquop aute ullamco anim Culpa deserunt nostrud excepteur voluptate velit ipsum sess enim
        </p>
      </div>
      <div className={styles.content}>
        <ul>
          <li>
            <div className={styles.text_box}>
              <p>
                Fashion Trends In 2022: <br /> Style, Colors, Accessories
              </p>
              <em>Aug 02. 2022</em>
              <div className={styles.more}>
                <span></span>
                <em>Read More</em>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.text_box}>
              <p>
                Fashion Trends In 2022: <br /> Style, Colors, Accessories
              </p>
              <em>Aug 02. 2022</em>
              <div className={styles.more}>
                <span></span>
                <em>Read More</em>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <button className={`${styles.btn1} btn1`}>Read Blog</button>
    </section>
  );
};

export default Index;
