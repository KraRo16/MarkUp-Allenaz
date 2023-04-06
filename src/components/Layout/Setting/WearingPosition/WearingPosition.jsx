import React from 'react';
import style from './WearingPosition.module.css';
import { Navbar } from 'components/Layout/Navbar/Navbar';

export const WearingPosition = () => {
  return (
    <div className={style.wearing_section}>
      <Navbar />
      <div className={style.wearing_blur}>
        <div className={style.wearing_container}>
          <h2 className={style.wearing_title}>Wearing Position</h2>
          <ul className={style.wearing_list}>
            <li className={style.wearing_list_row}>
              <p className={style.wearing_list_item}>Axis 1</p>
              <span className={style.wearing_list_value} type="number">
                20
              </span>
            </li>
            <li className={style.wearing_list_row}>
              <p className={style.wearing_list_item}>Axis 2</p>
              <span className={style.wearing_list_value} type="number">
                20
              </span>
            </li>
            <li className={style.wearing_list_row}>
              <p className={style.wearing_list_item}>Axis 3</p>
              <span className={style.wearing_list_value} type="number">
                20
              </span>
            </li>
            <li className={style.wearing_list_row}>
              <p className={style.wearing_list_item}>Axis 4</p>
              <span className={style.wearing_list_value} type="number">
                20
              </span>
            </li>
          </ul>
          <button className={style.wearing_btn}>SAVE</button>
        </div>
        <div className={style.wearing_container}>
          <h2 className={style.wearing_title}>Rest Position</h2>
          <ul className={style.wearing_list}>
            <li className={style.wearing_list_row}>
              <p className={style.wearing_list_item}>Axis 1</p>
              <span className={style.wearing_list_value} type="number">
                20
              </span>
            </li>
            <li className={style.wearing_list_row}>
              <p className={style.wearing_list_item}>Axis 2</p>
              <span className={style.wearing_list_value} type="number">
                20
              </span>
            </li>
            <li className={style.wearing_list_row}>
              <p className={style.wearing_list_item}>Axis 3</p>
              <span className={style.wearing_list_value} type="number">
                20
              </span>
            </li>
            <li className={style.wearing_list_row}>
              <p className={style.wearing_list_item}>Axis 4</p>
              <span className={style.wearing_list_value} type="number">
                20
              </span>
            </li>
          </ul>
          <button className={style.wearing_btn}>SAVE</button>
        </div>
      </div>
    </div>
  );
};
