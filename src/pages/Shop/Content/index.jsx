import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faHeart } from '@fortawesome/free-solid-svg-icons';
import { handleData } from '../../../constants/firebase';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../../constants/path';
import Loading from '../../../components/Loading';

const Index = ({ type }) => {
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
      setData(data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.top_menu}>
        <div className={styles.item_count}>
          <strong>25</strong>
          <em>Products Found</em>
        </div>
        <div className={styles.item_filter}>
          <p>
            sort by:
            <strong>
              Popularity <FontAwesomeIcon icon={faAngleDown} className={styles.icon} />
            </strong>
          </p>
        </div>
      </div>
      {loading == false ? (
        <div className={styles.item_wrap}>
          {data && (
            <ul>
              {data.map(item => {
                return (
                  <li key={item.id}>
                    <div className={styles.heart}>
                      {item.bast == `true` ? <em>BAST</em> : <p></p>}
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
      ) : (
        <div className={styles.loading}>
          <Loading></Loading>
        </div>
      )}

      <div className={styles.more}>
        <button className={`${styles.btn1} btn1`}> LOAD MORE</button>
      </div>
    </section>
  );
};

Index.propTypes = {
  type: PropTypes.string,
};

export default Index;
