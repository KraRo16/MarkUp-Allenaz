import React from 'react';
import style from './DefaultFunctions.module.css';
import { Navbar } from 'components/Layout/Navbar/Navbar';
import {BiRename} from 'react-icons/bi';

export const DefaultFunctions = () => {
  return (
    <div className={style.default_section}>
      <Navbar />
      <div className={style.default_blur}>
        <h2>Default Function</h2>
        <div>
          <form className={style.default_form}>
            <div className={style.default_form_row}>
              <label
                className={style.default_form_label}
                htmlFor="defaultPositionAxis"
              >
                Axis 1
              </label>
              <input className={style.default_form_input} type="number" />
            </div>
            <div className={style.default_form_row}>
              <label
                className={style.default_form_label}
                htmlFor="defaultPositionAxis"
              >
                Axis 2
              </label>
              <input className={style.default_form_input} type="number" />
            </div>
            <div className={style.default_form_row}>
              <label
                className={style.default_form_label}
                htmlFor="defaultPositionAxis"
              >
                Axis 3
              </label>
              <input className={style.default_form_input} type="number" />
            </div>
            <div className={style.default_form_row}>
              <label
                className={style.default_form_label}
                htmlFor="defaultPositionAxis"
              >
                Axis 4
              </label>
              <input className={style.default_form_input} type="number" />
            </div>
            <button>DEFAULT 1</button>
            <button className={style.default_form_rename_logo}>
                <BiRename />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
