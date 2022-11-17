import React from 'react';
import { useState } from 'react';
import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { handleData } from '../../../constants/firebase';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../../constants/path';
import Loading from '../../../components/Loading';

const Index = () => {
  const [menuActive, setMenuActive] = useState(0);
  const [type, setType] = useState(`Men Clothing`);
  const firebaseDAta = handleData(); //파이어 베이스에서 가지고온 데이터
  const [data, setData] = useState(); //아이템 데이터
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  //프로미스 변환 및 필터
  const getData = () => {
    setLoading(true);
    firebaseDAta.then(appData => {
      const data = appData.filter(item => {
        return item.type == type;
      });
      setData(data.slice(0, 8));
      setLoading(false);
    });
  };

  useEffect(() => {
    getData();
  }, [type]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sub_title}>
          <strong>NEW</strong>
          <em>COLLECTIONS</em>
        </div>
        <div className={styles.title}>
          <h2>Featured Products</h2>
        </div>
        <div className={styles.menu}>
          <ul>
            <li
              className={`${menuActive == 0 && styles.active}`}
              onClick={() => {
                setMenuActive(0);
                setType(`Men Clothing`);
              }}
            >
              <em>Men</em>
            </li>
            <li
              className={`${menuActive == 1 && styles.active}`}
              onClick={() => {
                setMenuActive(1);
                setType(`Women Clothing`);
              }}
            >
              <em>Women</em>
            </li>
            <li
              className={`${menuActive == 2 && styles.active}`}
              onClick={() => {
                setMenuActive(2);
                setType(`Accessories`);
              }}
            >
              <em>Accessories</em>
            </li>
            <li
              className={`${menuActive == 3 && styles.active}`}
              onClick={() => {
                setMenuActive(3);
                setType(`Shoes`);
              }}
            >
              <em>Shoes</em>
            </li>
          </ul>
        </div>
        {loading == false ? (
          <div className={styles.item_list}>
            {data && (
              <ul>
                {data.map(item => {
                  return (
                    <li key={item.id}>
                      <div className={styles.heart}>
                        <em>NEW</em>
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
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        ) : (
          <Loading></Loading>
        )}

        <button className={`${styles.btn1} btn1`}>See All Products</button>
      </div>
    </section>
  );
};

export default Index;
