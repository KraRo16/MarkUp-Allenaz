import React from 'react';
import style from './DefaultFunctions.module.css';
import { Navbar } from 'components/Layout/Navbar/Navbar';

export const DefaultFunctions = () => {
  return (
    <div className={style.default_section}>
      <Navbar />
      <div className={style.default_blur}>
        <h2>Default Function</h2>
        <div>
          <form className={style.wearing_form}>
            <div className={style.wearing_form_row}>
              <label
                className={style.wearing_form_label}
                htmlFor="wearingPositionAxis"
              >
                Axis 1
              </label>
              <input className={style.wearing_form_input} type="number" />
            </div>
            <div className={style.wearing_form_row}>
              <label
                className={style.wearing_form_label}
                htmlFor="wearingPositionAxis"
              >
                Axis 2
              </label>
              <input className={style.wearing_form_input} type="number" />
            </div>
            <div className={style.wearing_form_row}>
              <label
                className={style.wearing_form_label}
                htmlFor="wearingPositionAxis"
              >
                Axis 3
              </label>
              <input className={style.wearing_form_input} type="number" />
            </div>
            <div className={style.wearing_form_row}>
              <label
                className={style.wearing_form_label}
                htmlFor="wearingPositionAxis"
              >
                Axis 4
              </label>
              <input className={style.wearing_form_input} type="number" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
