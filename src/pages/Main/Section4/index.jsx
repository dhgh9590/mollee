import React, { useEffect, useState } from 'react';
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
import { handleData } from '../../../constants/firebase';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../../constants/path';

export default function App() {
  const firebaseDAta = handleData(); //파이어 베이스에서 가지고온 데이터
  const [data, setData] = useState(); //아이템 데이터
  const navigate = useNavigate();

  //프로미스 변환 및 필터
  const getData = () => {
    firebaseDAta.then(appData => {
      const data = appData.filter(item => {
        return item.bast == 'true';
      });
      setData(data.slice(0, 5));
    });
  };

  useEffect(() => {
    getData();
  }, []);
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
            {data &&
              data.map(item => {
                return (
                  <SwiperSlide key={item.id}>
                    <div className={styles.slide}>
                      <div className={styles.heart}>
                        <em>BAST</em>
                        <FontAwesomeIcon icon={faHeart} className={styles.icon} />
                      </div>
                      <div
                        className={styles.item}
                        onClick={() => {
                          navigate(PATH.DETAIL);
                          localStorage.setItem('item', JSON.stringify(item));
                        }}
                      >
                        <div className={styles.img}>
                          <img src={item.img} alt="이미지" />
                        </div>
                        <div className={styles.text}>
                          <em>{item.type}</em>
                          <h4>{item.name}</h4>
                          <strong>${item.price}</strong>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </section>
    </div>
  );
}
