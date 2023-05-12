import React from 'react';
import style from './Rom.module.css';
import { Navbar } from 'components/Layout/Navbar/Navbar';
import Slider from '@mui/material/Slider';
const rom = {
  axis1: require('../../../../img/Asse 1.webp'),
  axis2: require('../../../../img/Asse 2.webp'),
  axis3: require('../../../../img/Asse 3.webp'),
  axis4: require('../../../../img/Asse 4.webp')
};

export const Rom = () => {

  // const [axisValue1, setAxisValue1] = useState(0);

  return (
    <div className={style.rom_section}>
      <Navbar />
      <div className={style.rom_blur}>
        <h2 className={style.rom_title}>ROM</h2>
          <div className={style.rom_container}>
            <div className={style.rom_value}>
            <p className={style.rom_slider_value}>Min: -50</p>
            <img className={style.rom_img} src={rom.axis1} alt="Axis 1" />
            <p className={style.rom_slider_value}>Max: 30</p>
            </div>
              <Slider
                className={style.rom_slider}
                defaultValue={[-50, 30]}
                getAriaLabel={() => 'Minimum distance'}
                valueLabelDisplay="auto"
                disableSwap
                min={-50}
                max={30}
                // onChange={e => this.handleChange(e.target.value)}
              />
          </div>
          <div className={style.rom_container}>
            <div className={style.rom_value}>
            <p className={style.rom_slider_value}>Min: -90</p>
            <img className={style.rom_img} src={rom.axis2} alt="Axis 2" />
            <p className={style.rom_slider_value}>Max: 20</p>
            </div>
              <Slider
                className={style.rom_slider}
                defaultValue={[-90, 20]}
                getAriaLabel={() => 'Minimum distance'}
                valueLabelDisplay="auto"
                disableSwap
                min={-90}
                max={20}
              />
          </div>
          <div className={style.rom_container}>
            <div className={style.rom_value}>
            <p className={style.rom_slider_value}>Min: -10</p>
            <img className={style.rom_img} src={rom.axis3} alt="Axis 3" />
            <p className={style.rom_slider_value}>Max: 70</p>
            </div>
              <Slider
                className={style.rom_slider}
                defaultValue={[-10, 70]}
                getAriaLabel={() => 'Minimum distance'}
                valueLabelDisplay="auto"
                disableSwap
                min={-10}
                max={70}
              />
          </div>
          <div className={style.rom_container}>
            <div className={style.rom_value}>
            <p className={style.rom_slider_value}>Min: 5</p>
            <img className={style.rom_img} src={rom.axis4} alt="Axis 4" />
            <p className={style.rom_slider_value}>Max: 135</p>
            </div>
              <Slider
                className={style.rom_slider}
                defaultValue={[5, 135]}
                getAriaLabel={() => 'Minimum distance'}
                valueLabelDisplay="auto"
                disableSwap
                min={5}
                max={135}
              />
          </div>
        <div className={style.rom_btn_container}>
          <button className={style.rom_btn_save}>SAVE</button>
          <button className={style.rom_btn_default}>DEFAULT</button>
        </div>
      </div>
    </div>
  );
};
