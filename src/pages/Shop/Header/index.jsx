import React from 'react';
import styles from './style.module.css';
import PropTypes from 'prop-types';

const Index = ({ title, content }) => {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>{title && title}</h2>
      <p className={styles.content}>{content && content}</p>
    </header>
  );
};

Index.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default Index;
