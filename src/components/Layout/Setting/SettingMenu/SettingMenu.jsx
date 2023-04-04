import React from "react";
import style from './SettingMenu.module.css'
import { Navbar } from "components/Layout/Navbar/Navbar";
import { Link } from 'react-router-dom';

export const SettingMenu = () => {

    return (
      <div className={style.setting_menu_section}>
        <Navbar />
        <div className={style.setting_menu_blur}>
          <div className={style.setting_menu_btn_container}>
            <Link to="/rom">
              <button className={style.setting_menu_btn}>ROM</button>
            </Link>
            <Link to="/axisspeed_advantage">
              <button className={style.setting_menu_btn}>
                AXIS SPEED (ADVANTAGE)
              </button>
            </Link>
            <Link to="/axisspeed">
              <button className={style.setting_menu_btn}>AXIS SPEED</button>
            </Link>
            <Link to="/sensitivity">
              <button className={style.setting_menu_btn}>
                JOYSTICK SENSITIVITY
              </button>
            </Link>
            <Link to="/wearingposition">
              <button className={style.setting_menu_btn}>
                WEARING POSITION
              </button>
            </Link>
            <Link to="/default_function">
              <button className={style.setting_menu_btn}>
                DEFAULT FUNCTIONS
              </button>
            </Link>
          </div>
        </div>
      </div>
    );


}