import React, { useState } from 'react';
import style from './JoystickSensitivity.module.css';
import { Navbar } from 'components/Layout/Navbar/Navbar';
import Slider from '@mui/material/Slider';
import { BsFillLockFill, BsFillUnlockFill } from 'react-icons/bs';

export const JoystickSensitivity = () => {
  const [axisValue1, setAxisValue1] = useState(0);
  const [axisValue2, setAxisValue2] = useState(0);
  const [axisValue3, setAxisValue3] = useState(0);
  const [axisValue4, setAxisValue4] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  const handleChangeAxis1 = (event, newValue) => {
    setAxisValue1(newValue);
    if (isLocked) {
      setAxisValue2(newValue);
      setAxisValue3(newValue);
      setAxisValue4(newValue);
    }
  };
  const handleChangeAxis2 = (event, newValue) => {
    setAxisValue2(newValue);
    if (isLocked) {
      setAxisValue1(newValue);
      setAxisValue3(newValue);
      setAxisValue4(newValue);
    }
  };
  const handleChangeAxis3 = (event, newValue) => {
    setAxisValue3(newValue);
    if (isLocked) {
      setAxisValue1(newValue);
      setAxisValue2(newValue);
      setAxisValue4(newValue);
    }
  };
  const handleChangeAxis4 = (event, newValue) => {
    setAxisValue4(newValue);
    if (isLocked) {
      setAxisValue1(newValue);
      setAxisValue2(newValue);
      setAxisValue3(newValue);
    }
  };
  const handleSync = () => {
    setIsLocked(!isLocked);
    if (!isLocked) {
      // если кнопка только что была нажата, устанавливаем значения всех слайдеров равными первому
      setAxisValue2(axisValue1);
      setAxisValue3(axisValue1);
      setAxisValue4(axisValue1);
    }
  };

  return (
    <div className={style.axis_speed_section}>
      <Navbar />
      <div className={style.axis_speed_blur}>
        <h2 className={style.axis_speed_title}>Joystick Sensitivity</h2>
        <button className={style.axis_slider_locker_btn} onClick={handleSync}>
          {isLocked ? (
            <BsFillLockFill size={26} color="red" />
          ) : (
            <BsFillUnlockFill size={26} color="green" />
          )}
          {/* изменяем текст на кнопке в зависимости от состояния */}
        </button>
        <div className={style.axis_slider}>
          <h3 className={style.axis_slider_title}>Axis X</h3>
          <p className={style.axis_slider_value}>{axisValue1}</p>
          <Slider
            className={style.axis_slider_item}
            value={axisValue1}
            onChange={handleChangeAxis1}
            aria-label="Axis 1"
            min={0}
            max={100}
          />
        </div>
        <div className={style.axis_slider}>
          <h3 className={style.axis_slider_title}>Axis Y</h3>
          <p className={style.axis_slider_value}>{axisValue2}</p>
          <Slider
            className={style.axis_slider_item}
            value={axisValue2}
            onChange={handleChangeAxis2}
            aria-label="Axis 2"
            min={0}
            max={100}
          />
        </div>
        <div className={style.axis_slider}>
          <h3 className={style.axis_slider_title}>Axis Z</h3>
          <p className={style.axis_slider_value}>{axisValue3}</p>
          <Slider
            className={style.axis_slider_item}
            value={axisValue3}
            onChange={handleChangeAxis3}
            aria-label="Axis 3"
            min={0}
            max={100}
          />
        </div>
        <div className={style.axis_slider}>
          <h3 className={style.axis_slider_title}>Axis C</h3>
          <p className={style.axis_slider_value}>{axisValue4}</p>
          <Slider
            className={style.axis_slider_item}
            value={axisValue4}
            onChange={handleChangeAxis4}
            aria-label="Axis 4"
            min={0}
            max={100}
          />
        </div>
        <div className={style.axis_slider_btn_container}>
          <button className={style.axis_slider_btn_save}>SAVE</button>
          <button className={style.axis_slider_btn_default}>DEFAULT</button>
        </div>
      </div>
    </div>
  );
};
