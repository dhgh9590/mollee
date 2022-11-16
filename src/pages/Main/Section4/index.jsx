import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

// import required modules
import { Navigation, Pagination } from 'swiper';

export default function App() {
  return (
    <div className={styles.container}>
      <div className={styles.text_container}>
        <div className={styles.sub_title}>
          <strong>TOP</strong>
          <em>PRODUCTS</em>
        </div>
        <div className={styles.title}>
          <h2>Best Sellers At Mollee</h2>
          <p>
            Cillum eu id enim aliquop aute ullamco anim Culpa deserunt nostrud excepteur voluptate velit ipsum sess enim
          </p>
        </div>
      </div>
      <section className={`${styles.slider_container} slide2`}>
        <div className={styles.slider_wrap}>
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              380: {
                slidesPerView: 1.1,
                slidesPerGroup: 1,
              },
              400: {
                slidesPerView: 1.2,
                slidesPerGroup: 1,
              },
              440: {
                slidesPerView: 1.3,
                slidesPerGroup: 1,
              },
              480: {
                slidesPerView: 1.5,
                slidesPerGroup: 1,
              },
              625: {
                slidesPerView: 2,
                slidesPerGroup: 1,
              },
              740: {
                slidesPerView: 2.5,
                slidesPerGroup: 1,
              },
              900: {
                slidesPerView: 3,
                slidesPerGroup: 1,
              },
              1015: {
                slidesPerView: 3.5,
                slidesPerGroup: 1,
              },
              1150: {
                slidesPerView: 4,
                slidesPerGroup: 1,
              },
            }}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className={styles.slide}>
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
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slide}>
                <div className={styles.heart}>
                  <em>NEW</em>
                  <FontAwesomeIcon icon={faHeart} className={styles.icon} />
                </div>
                <div className={styles.item}>
                  <div className={styles.img}>
                    <img src={`${process.env.PUBLIC_URL}/images/section2_1.png`} alt="" />
                  </div>
                  <div className={styles.text}>
                    <h4>Cotton T-shirt</h4>
                    <strong>$35.99</strong>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slide}>
                <div className={styles.heart}>
                  <em>NEW</em>
                  <FontAwesomeIcon icon={faHeart} className={styles.icon} />
                </div>
                <div className={styles.item}>
                  <div className={styles.img}>
                    <img src={`${process.env.PUBLIC_URL}/images/section2_1.png`} alt="" />
                  </div>
                  <div className={styles.text}>
                    <h4>Cotton T-shirt</h4>
                    <strong>$35.99</strong>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slide}>
                <div className={styles.heart}>
                  <em>NEW</em>
                  <FontAwesomeIcon icon={faHeart} className={styles.icon} />
                </div>
                <div className={styles.item}>
                  <div className={styles.img}>
                    <img src={`${process.env.PUBLIC_URL}/images/section2_1.png`} alt="" />
                  </div>
                  <div className={styles.text}>
                    <h4>Cotton T-shirt</h4>
                    <strong>$35.99</strong>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slide}>
                <div className={styles.heart}>
                  <em>NEW</em>
                  <FontAwesomeIcon icon={faHeart} className={styles.icon} />
                </div>
                <div className={styles.item}>
                  <div className={styles.img}>
                    <img src={`${process.env.PUBLIC_URL}/images/section2_1.png`} alt="" />
                  </div>
                  <div className={styles.text}>
                    <h4>Cotton T-shirt</h4>
                    <strong>$35.99</strong>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
}
