import React from 'react';
import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faHeart, faShoppingBag, faBars, faTimes, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../constants/path';
import { onLogin, onLogout, onUserStateChange } from '../../constants/firebase';
import { useEffect } from 'react';
import useScrollTop from '../../hooks/useScrollTop';
import { useContext } from 'react';
import { addUser } from '../../context/user';
import useCart from '../../hooks/useCart';
import useWish from '../../hooks/useWish';

const Index = () => {
  const [tab, setTab] = useState(false); //메뉴 2뎁스
  const [mobileNav, setMobileNav] = useState(false); //모바일 메뉴
  const navigate = useNavigate();
  const { user, setUser } = useContext(addUser); //사용자 정보 저장
  const scrollTop = useScrollTop(); //페이지 전환시 스크롤 최상단으로 이동

  //장바구니
  const {
    cartQuery: { data: products },
  } = useCart();

  //찜하기
  const {
    cartQuery: { data: wish },
  } = useWish();

  useEffect(() => {
    //사용자 정보 기억
    onUserStateChange(user => {
      setUser(user);
    });

    scrollTop;
  }, []);

  //로그인 함수
  const handleLogin = () => {
    onLogin();
  };

  //로그아웃 함수
  const handleLogout = () => {
    onLogout();
  };

  return (
    <nav
      className={styles.nav}
      onMouseLeave={() => {
        setTab(false);
      }}
    >
      <div
        className={styles.mobile_menu}
        onClick={() => {
          setMobileNav(true);
        }}
      >
        <button>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <div className={`${styles.menu_wrap} ${tab && styles.active}`}>
        <div
          className={styles.title}
          onClick={() => {
            navigate(PATH.MAIN);
          }}
        >
          <h1>MOLLEE</h1>
        </div>
        <div className={`${styles.menu_list} ${mobileNav && styles.active}`}>
          <div
            className={styles.close}
            onClick={() => {
              setMobileNav(false);
            }}
          >
            <button>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <ul>
            <li
              onClick={() => {
                navigate(PATH.MAIN);
              }}
            >
              <em>Home</em>
            </li>
            <li
              onMouseEnter={() => {
                setTab(true);
              }}
            >
              <em>Shop</em>
              <FontAwesomeIcon icon={faAngleDown} className={styles.icon} />
            </li>
            <li>
              <em>Blog</em>
            </li>
            <li>
              <em>Contact</em>
            </li>
          </ul>
        </div>
        <div className={styles.tab_menu}>
          <ul>
            <li
              onClick={() => {
                navigate(`${PATH.SHOP}/${PATH.MEN}`);
              }}
            >
              <em>Men</em>
            </li>
            <li
              onClick={() => {
                navigate(`${PATH.SHOP}/${PATH.WOMEN}`);
              }}
            >
              <em>Women</em>
            </li>
            <li
              onClick={() => {
                navigate(`${PATH.SHOP}/${PATH.ACCESSORIES}`);
              }}
            >
              <em>Accessories</em>
            </li>
            <li
              onClick={() => {
                navigate(`${PATH.SHOP}/${PATH.SHOES}`);
              }}
            >
              <em>Shoes</em>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.user_wrap}>
        {!user ? (
          <button className={styles.login} onClick={handleLogin}>
            Login
          </button>
        ) : (
          <ul>
            <li
              onClick={() => {
                navigate(PATH.WISH);
              }}
            >
              <FontAwesomeIcon icon={faHeart} className={styles.icon} />
              <em className={styles.count}>{wish && wish.length}</em>
            </li>
            <li
              onClick={() => {
                navigate(PATH.CART);
              }}
            >
              <FontAwesomeIcon icon={faShoppingBag} className={styles.icon} />
              <em className={styles.count}>{products && products.length}</em>
            </li>
            {user.isAdmin && (
              <li
                onClick={() => {
                  navigate(PATH.ADMIN);
                }}
              >
                <FontAwesomeIcon icon={faPencilAlt} />
              </li>
            )}

            <li className={styles.user_name}>
              <em>{user && user.displayName}</em>
            </li>
            <li
              className={styles.logout}
              onClick={() => {
                handleLogout();
              }}
            >
              <em>Logout</em>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Index;
