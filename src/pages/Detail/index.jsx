import React from 'react';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { addUser } from '../../context/user';
import { addOrUpdateToCart } from '../../constants/firebase';

export const Detail = () => {
  const { user } = useContext(addUser);
  const [data, setData] = useState();
  const [size, setSize] = useState(`S`); //사이즈
  const [color, setColor] = useState(`black`); //컬러
  const [count, setCount] = useState(1); //갯수

  const handleClick = () => {
    const product = {
      id: data && data.id,
      img: data && data.img,
      name: data && data.name,
      price: data && data.price,
      type: data && data.type,
      size,
      color,
      count,
    };
    addOrUpdateToCart(user && user.uid, product);
    alert('장바구니 담기가 완료 되었습니다');
  };

  useEffect(() => {
    let item = localStorage.getItem('item');
    item = JSON.parse(item);
    setData(item);
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <section className={styles.section}>
        <div className={styles.item}>
          <div className={styles.item_img}>
            <img src={data && data.img} alt="이미지" />
          </div>
          <div className={styles.item_info}>
            <em className={styles.type}>{data && data.type}</em>
            <h4 className={styles.name}>{data && data.name}</h4>
            <strong className={styles.price}>${data && data.price}</strong>
            <p className={styles.info}>{data && data.info}</p>
            <div className={styles.item_size}>
              <strong>SIZE</strong>
              {data && data.size && (
                <ul>
                  {data.size.map((item, index) => {
                    return (
                      <li
                        key={index}
                        onClick={() => {
                          setSize(item);
                        }}
                        className={`${item == size && styles.active}`}
                      >
                        <em>{item}</em>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
            <div className={styles.item_color}>
              <strong>COLOR</strong>
              {data && data.color && (
                <ul>
                  {data.color.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className={`${item == color && styles.active}`}
                        style={{ background: item }}
                        onClick={() => {
                          setColor(item);
                        }}
                      ></li>
                    );
                  })}
                </ul>
              )}
            </div>
            <div className={styles.btn}>
              <div className={styles.count}>
                <FontAwesomeIcon
                  icon={faMinus}
                  style={count <= 1 && { pointerEvents: `none`, color: `#ccc` }}
                  className={styles.icon}
                  onClick={() => {
                    setCount(prev => (prev -= 1));
                  }}
                />
                <em>{count}</em>
                <FontAwesomeIcon
                  icon={faPlus}
                  className={styles.icon}
                  onClick={() => {
                    setCount(prev => (prev += 1));
                  }}
                />
              </div>
              <button className={`${styles.btn1} btn1`} onClick={handleClick}>
                ADD TO BASKET
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Detail;
