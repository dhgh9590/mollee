import React from 'react';
import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faSearch,
  faUser,
  faHeart,
  faShoppingBag,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Index = () => {
  const [tab, setTab] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

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
        <div className={styles.title}>
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
            <li>
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
            <li>
              <em>Men</em>
            </li>
            <li>
              <em>Women</em>
            </li>
            <li>
              <em>Accessories</em>
            </li>
            <li>
              <em>New Arrivals</em>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.user_wrap}>
        <ul>
          <li>
            <FontAwesomeIcon icon={faSearch} className={styles.icon} />
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} className={styles.icon} />
          </li>
          <li>
            <FontAwesomeIcon icon={faHeart} className={styles.icon} />
            <em className={styles.count}>0</em>
          </li>
          <li>
            <FontAwesomeIcon icon={faShoppingBag} className={styles.icon} />
            <em className={styles.count}>0</em>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Index;
