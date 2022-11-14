import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './style.module.css';

// import required modules
import { Navigation, Pagination, Keyboard, Autoplay, A11y } from 'swiper';
import { useState } from 'react';

export default function App() {
  const [index, setIndex] = useState(); //현재 슬라이드 인덱스 번호 저장
  return (
    <div className={styles.container}>
      <div className={styles.side_bar}>
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
        <div className={styles.slider_count}>
          <strong>{index && index}</strong>
          <span>/</span>
          <em>3</em>
        </div>
      </div>
      <div className={styles.scroll}>
        <div>
          <span></span>
          <em>Scroll Down</em>
        </div>
      </div>
      <div className={styles.slider_wrap}>
        <Swiper
          modules={[Navigation, Pagination, Keyboard, Autoplay, A11y]}
          cssMode={true}
          navigation={true}
          slidesPerView={1}
          speed={3000}
          loop={true}
          pagination={{ clickable: true }}
          keyboard={true}
          onSlideChange={swiper => {
            setIndex(swiper.realIndex + 1);
            console.log(swiper);
          }}
          className="mySwiper"
        >
          <div className={styles.slider}>
            <ul>
              <li>
                <SwiperSlide key={0}>
                  <div className={`${styles.slide} slide`}>
                    <div className={`${styles.img} img`}>
                      <img src={`${process.env.PUBLIC_URL}/images/banner.png`} alt="" />
                    </div>
                    <div className={styles.text}>
                      <div className={`${styles.sub_title} sub_title`}>
                        <strong>NEW</strong>
                        <em>COLLECTION</em>
                      </div>
                      <div className={`${styles.title} title`}>
                        <h2>
                          Meet New <br /> Fashion WeeK
                        </h2>
                      </div>
                      <button className={`${styles.btn1} btn1`}>Shop Now</button>
                    </div>
                  </div>
                </SwiperSlide>
              </li>
              <li>
                <SwiperSlide key={1}>
                  <div className={`${styles.slide} slide`}>
                    <div className={`${styles.img} img`}>
                      <img src={`${process.env.PUBLIC_URL}/images/banner.png`} alt="" />
                    </div>
                    <div className={styles.text}>
                      <div className={`${styles.sub_title} sub_title`}>
                        <strong>NEW</strong>
                        <em>COLLECTION</em>
                      </div>
                      <div className={`${styles.title} title`}>
                        <h2>
                          Meet New <br /> Fashion WeeK
                        </h2>
                      </div>
                      <button className={`${styles.btn1} btn1`}>Shop Now</button>
                    </div>
                  </div>
                </SwiperSlide>
              </li>
              <li>
                <SwiperSlide key={2}>
                  <div className={`${styles.slide} slide`}>
                    <div className={`${styles.img} img`}>
                      <img src={`${process.env.PUBLIC_URL}/images/banner.png`} alt="" />
                    </div>
                    <div className={styles.text}>
                      <div className={`${styles.sub_title} sub_title`}>
                        <strong>NEW</strong>
                        <em>COLLECTION</em>
                      </div>
                      <div className={`${styles.title} title`}>
                        <h2>
                          Meet New <br /> Fashion WeeK
                        </h2>
                      </div>
                      <button className={`${styles.btn1} btn1`}>Shop Now</button>
                    </div>
                  </div>
                </SwiperSlide>
              </li>
            </ul>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
