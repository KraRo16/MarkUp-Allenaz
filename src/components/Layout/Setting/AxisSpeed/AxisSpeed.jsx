import React, {useState} from "react";
import style from './AxisSpeed.module.css'
import { Navbar } from "components/Layout/Navbar/Navbar";
import Slider from '@mui/material/Slider';

export const AxisSpeed = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    
    return (
      <div className={style.axis_speed_section}>
        <Navbar />
        <div className={style.axis_speed_blur}>
          <h2 className={style.axis_speed_title}>Axis Speed</h2>
          <div>
            <h3>Axis 1</h3>
            <Slider
              value={value}
              onChange={handleChange}
              aria-label="Temperature slider"
              min={0}
              max={100}
            />
            <p>{value}</p>
          </div>
        </div>
      </div>
    );


}