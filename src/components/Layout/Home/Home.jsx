import React from 'react';
import style from './Home.module.css';
import { Navbar } from '../Navbar/Navbar';

export const Home = () => {
  return (
    <div className={style.home_section}>
      <Navbar />
      <div className={style.home_blur}>
        <button type="" className={style.home_btn_start}>
          START
        </button>
        <div className={style.home_btn_container}>
          <button className={style.home_btn}>DEFAULT 1</button>
          <button className={style.home_btn}>DEFAULT 2</button>
          <button className={style.home_btn}>DEFAULT 3</button>
          <button className={style.home_btn}>DEFAULT 4</button>
          <button className={style.home_btn}>DEFAULT 5</button>
          <button className={style.home_btn}>DEFAULT 6</button>
        </div>
        <button type="" className={style.home_btn_stop}>
          STOP
        </button>
      </div>
    </div>
  );
};
