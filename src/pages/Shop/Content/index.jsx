import React, { useContext, useEffect, useState } from 'react';
import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faHeart } from '@fortawesome/free-solid-svg-icons';
import { handleData } from '../../../constants/firebase';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../../constants/path';
import Loading from '../../../components/Loading';
import { useRef } from 'react';
import usePopupClose from '../../../hooks/usePopupClose';
import useWish from '../../../hooks/useWish';
import { addUser } from '../../../context/user';

const Index = ({ type }) => {
  const { user } = useContext(addUser);
  const firebaseDAta = handleData(); //파이어 베이스에서 가지고온 데이터
  const [allData, setAllData] = useState(); //모든 아이템 데이터
  const [data, setData] = useState(); //0~12번째 아이템 데이터
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); //로딩
  const [filterText, setFilterText] = useState(`new`); //필터 텍스트 가지고오기
  const [filterToggle, setFilterToggle] = useState(false); //필터 토글 창 닫기
  const filter = useRef();
  const toggleValue = usePopupClose(filter);
  const [btn, setBtn] = useState(false);

  //찜하기
  const { addWishs } = useWish();
  const [wishId, setWishId] = useState();
  const handleWish = item => {
    addWishs.mutate((user && user.uid, item));
  };

  const {
    cartQuery: { data: products },
  } = useWish();

  const wishFilter = () => {
    const copy = products && [...products];
    const newCopy =
      copy &&
      copy.map(item => {
        return item.id;
      });
    setWishId(newCopy);
  };

  useEffect(() => {
    wishFilter();
  }, [products]);

  useEffect(() => {
    setFilterToggle(toggleValue);
  }, [toggleValue]);

  //프로미스 변환 및 필터
  const getData = () => {
    setLoading(true);
    firebaseDAta.then(appData => {
      const data = appData.filter(item => {
        return item.type == type;
      });
      setAllData(data);
      const newData = data.slice(0, 12);
      setData(newData);
      setLoading(false);
    });
  };

  //높은 가격순 정렬
  const highPriceFilter = () => {
    const newData = allData.sort((a, b) => {
      return b.price - a.price;
    });
    setAllData(newData);
    setData(newData.slice(0, 12));
  };

  //낮은 가격순 정렬
  const lowPriceFilter = () => {
    const newData = allData.sort((a, b) => {
      return a.price - b.price;
    });
    setAllData(newData);
    setData(newData.slice(0, 12));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.top_menu}>
        <div className={styles.item_count}>
          <strong>{allData && allData.length}</strong>
          <em>Products Found</em>
        </div>
        <div ref={filter} className={styles.item_filter}>
          <p>
            sort by :
            <strong
              onClick={() => {
                setFilterToggle(true);
              }}
            >
              {filterText} <FontAwesomeIcon icon={faAngleDown} className={styles.icon} />
            </strong>
          </p>
          {filterToggle == true && (
            <ul>
              <li
                onClick={() => {
                  setFilterText(`new`);
                  getData();
                  setFilterToggle(false);
                }}
              >
                new
              </li>
              <li
                onClick={() => {
                  setFilterText(`high price`);
                  highPriceFilter();
                  setFilterToggle(false);
                }}
              >
                high price
              </li>
              <li
                onClick={() => {
                  setFilterText(`low price`);
                  lowPriceFilter();
                  setFilterToggle(false);
                }}
              >
                low price
              </li>
            </ul>
          )}
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
                      <ul>
                        {wishId &&
                          wishId.map(wish => {
                            if (wish == item.id) {
                              return (
                                <li key={wish}>
                                  <FontAwesomeIcon
                                    icon={faHeart}
                                    className={`${styles.icon} ${styles.active}`}
                                    onClick={() => {
                                      handleWish(item);
                                    }}
                                  />
                                </li>
                              );
                            }
                          })}
                        <li>
                          <FontAwesomeIcon
                            icon={faHeart}
                            className={`${styles.icon}`}
                            onClick={() => {
                              handleWish(item);
                            }}
                          />
                        </li>
                      </ul>
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
      {btn == false && (
        <div className={styles.more}>
          <button
            className={`${styles.btn1} btn1`}
            onClick={() => {
              setData(allData);
              setBtn(true);
            }}
          >
            LOAD MORE
          </button>
        </div>
      )}
    </section>
  );
};

Index.propTypes = {
  type: PropTypes.string,
};

export default Index;
