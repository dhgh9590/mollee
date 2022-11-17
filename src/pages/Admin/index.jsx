import React, { useState } from 'react';
import Navbar from '../../components/NavBar';
import Footer from '../../components/Footer';
import styles from './style.module.css';
import { useContext } from 'react';
import { addUser } from '../../context/user';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../constants/path';
import axios from 'axios';
import { addNewProduct } from '../../constants/firebase';

export const Admin = () => {
  const { user } = useContext(addUser);
  const navigate = useNavigate();
  const [fileImg, setFileImg] = useState(''); //사용자가 업로드한 이미지 파일 미리보기 저장
  const [inputValue, setInputValue] = useState(); //input값 저장

  // 사용자가 업로드한 이미지 미리보기
  const saveFileImage = e => {
    setFileImg(URL.createObjectURL(e.target.files[0]));
  };

  //사용자가 업로드한 이미지 데이터 전송
  const onChangeImg = async e => {
    const uploadFile = e.target.files[0];
    const formData = new FormData();
    formData.append('file', uploadFile);
    formData.append('upload_preset', process.env.REACT_APP_CLOUDINARY_PRESET);
    try {
      const res = await axios.post(process.env.REACT_APP_CLOUDINARY_URL, formData);
      setInputValue(prev => ({ ...prev, img: res.data.url }));
    } catch (error) {
      console.log(error);
    }
  };

  //inputValue에게 input 값 넣기
  const handleInput = event => {
    const { name, value } = event.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  //input값 데이터 전송
  const handleSubmit = e => {
    e.preventDefault();
    addNewProduct(inputValue);
  };

  useEffect(() => {
    (user && user.isAdmin === false) || user === null ? navigate(PATH.MAIN) : null;
  }, [user]);
  return (
    <>
      <Navbar></Navbar>
      <section className={styles.section}>
        <h2>Register a new product</h2>
        <div className={styles.img_box}>{fileImg && <img src={fileImg} alt="" />}</div>
        <div className={styles.file}>
          <label className={styles.file_label} htmlFor="profile_upload">
            Image Upload
          </label>
          <input
            className={styles.file_input}
            type="file"
            id="profile_upload"
            accept="image/*"
            onChange={e => {
              saveFileImage(e);
              onChangeImg(e);
            }}
          />
        </div>
        <form
          onSubmit={e => {
            handleSubmit(e);
          }}
          className={styles.form}
        >
          <div className={styles.item_name}>
            <input
              type="text"
              name="name"
              placeholder="제품명"
              onChange={e => {
                handleInput(e);
              }}
            />
          </div>
          <div className={styles.item_price}>
            <input
              type="text"
              name="price"
              placeholder="가격"
              onChange={e => {
                handleInput(e);
              }}
            />
          </div>
          <div className={styles.item_type}>
            <input
              type="text"
              name="type"
              placeholder="카테고리"
              onChange={e => {
                handleInput(e);
              }}
            />
          </div>
          <div className={styles.item_info}>
            <input
              type="text"
              name="info"
              placeholder="제품설명"
              onChange={e => {
                handleInput(e);
              }}
            />
          </div>
          <div className={styles.item_color}>
            <input
              type="text"
              name="color"
              placeholder="색깔 (#black,#blue,#red)"
              onChange={e => {
                handleInput(e);
              }}
            />
          </div>
          <div className={styles.item_size}>
            <input
              type="text"
              name="size"
              placeholder="사이즈 (S,M,L,XL)"
              onChange={e => {
                handleInput(e);
              }}
            />
          </div>
          <div className={styles.item_bast}>
            <input
              type="text"
              name="bast"
              placeholder="true or false"
              defaultValue={false}
              onChange={e => {
                handleInput(e);
              }}
            />
          </div>
          <button className={`${styles.btn2} btn1`}>제품 등록하기</button>
        </form>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Admin;
