import React from 'react';
import style from './Wearing.module.css';
import { Navbar } from '../Navbar/Navbar';

export const Wearing = () => {
  return (
    <div className={style.wearing_section}>
      <Navbar />
      <div className={style.wearing_blur}>
        <div className={style.wearing_btn_container}>
          <button className={style.wearing_btn}>WEARING POSITION</button>

          <button className={style.wearing_btn}>DRESSED</button>

          <button className={style.wearing_btn}>FREE POSITION</button>
          <button className={style.wearing_btn}>UNDRESSED</button>
        </div>
      </div>
    </div>
  );
};
