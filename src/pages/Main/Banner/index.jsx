import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './style.module.css';

// import required modules
import { Navigation, Pagination } from 'swiper';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../../constants/path';

export default function App() {
  const [index, setIndex] = useState(); //현재 슬라이드 인덱스 번호 저장
  const navigate = useNavigate();
  return (
    <div className={`${styles.container} slide1`}>
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
          modules={[Navigation, Pagination]}
          navigation={true}
          slidesPerView={1}
          speed={1500}
          loop={true}
          pagination={{ clickable: true }}
          loopAdditionalSlides={1}
          onSlideChange={swiper => {
            setIndex(swiper.realIndex + 1);
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
                      <button
                        onClick={() => {
                          navigate(`${PATH.SHOP}/${PATH.WOMEN}`);
                        }}
                        className={`${styles.btn1} btn1`}
                      >
                        Shop Now
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              </li>
              <li>
                <SwiperSlide key={1}>
                  <div className={`${styles.slide} slide`}>
                    <div className={`${styles.img} img`}>
                      <img src={`${process.env.PUBLIC_URL}/images/banner2.png`} alt="" />
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
                      <button
                        onClick={() => {
                          navigate(`${PATH.SHOP}/${PATH.ACCESSORIES}`);
                        }}
                        className={`${styles.btn1} btn1`}
                      >
                        Shop Now
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              </li>
              <li>
                <SwiperSlide key={2}>
                  <div className={`${styles.slide} slide`}>
                    <div className={`${styles.img} img`}>
                      <img src={`${process.env.PUBLIC_URL}/images/banner3.png`} alt="" />
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
                      <button
                        onClick={() => {
                          navigate(`${PATH.SHOP}/${PATH.MEN}`);
                        }}
                        className={`${styles.btn1} btn1`}
                      >
                        Shop Now
                      </button>
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
