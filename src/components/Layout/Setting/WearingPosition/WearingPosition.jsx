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
          <button className={style.wearing_form_btn}>SAVE</button>
        </div>
        <div className={style.wearing_container}>
          <h2 className={style.wearing_title}>Rest Position</h2>
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
          <button className={style.wearing_form_btn}>SAVE</button>
        </div>
      </div>
    </div>
  );
};
