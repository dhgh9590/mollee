import React, { useContext, useEffect } from 'react';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import styles from './style.module.css';
import useWish from '../../hooks/useWish';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../constants/path';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { addUser } from '../../context/user';

export const Wish = () => {
  const { user } = useContext(addUser);
  const navigate = useNavigate();
  const {
    cartQuery: { data: products },
  } = useWish();
  const { removeItem } = useWish();
  const handleDelete = data => {
    removeItem.mutate(data.id);
  };

  useEffect(() => {
    user === null ? navigate(PATH.MAIN) : null;
  }, [user]);
  return (
    <>
      <Navbar></Navbar>
      <section className={styles.section}>
        {products && products.length == 0 && <h2>찜한 상품이 없습니다</h2>}
        <div className={styles.item_wrap}>
          {products && (
            <ul>
              {products.map(item => {
                return (
                  <li key={item.id}>
                    <div className={styles.heart}>
                      {item.bast == `true` ? <em>BAST</em> : <p></p>}
                      <FontAwesomeIcon
                        icon={faTimes}
                        className={styles.icon}
                        onClick={() => {
                          handleDelete(item);
                        }}
                      />
                    </div>
                    <div
                      className={styles.item}
                      onClick={() => {
                        navigate(PATH.DETAIL);
                        localStorage.setItem('item', JSON.stringify(item));
                      }}
                    >
                      <div className={styles.img}>
                        <img src={item.img} alt="" />
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
      </section>
      <Footer></Footer>
    </>
  );
};

export default Wish;
