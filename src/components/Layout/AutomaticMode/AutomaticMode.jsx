import React from "react";
import style from './AutomaticMode.module.css'
import { Navbar } from "../Navbar/Navbar";
import mode from '../../../api/mode.json'
import axios from 'axios';

export const AutomaticMode = () => {

  const handleClick = id_button => {
      console.log(id_button);
    axios
      .post('http://192.168.0.116:3000', { id_button })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };


    return (
      <div className={style.mode_section}>
        <Navbar />
          <div className={style.mode_blur}>
            <div className={style.mode_btn_container}>
              {mode.map(item => (
                <button
                  className={style.mode_btn}
                  key={item.id_button}
                  onClick={() => handleClick(item.id_button)}
                >
                  {item.description_button}
                </button>
              ))}
            </div>
            <button type="" className={style.mode_btn_stop}>
              STOP
            </button>
          </div>
      </div>
    );

}
