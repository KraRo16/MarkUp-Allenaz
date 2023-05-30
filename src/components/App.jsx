import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginForm } from './Login/LoginForm/LoginForm';
import { Home } from './Layout/Home/Home';
import { AutomaticMode } from './Layout/AutomaticMode/AutomaticMode';
import { ErrorWarning } from './Layout/ErrorWarning/ErrorWarning';
import { Diagnostics } from './Layout/Diagnostics/Diagnostics';
import { Wearing } from './Layout/Wearing/Wearing';
import { SettingMenu } from './Layout/Setting/SettingMenu/SettingMenu';
import { AxisSpeed } from './Layout/Setting/AxisSpeed/AxisSpeed';
import { AxisSpeedAdvance } from './Layout/Setting/AxisSpeedAdvance/AxisSpeedAdvance';
import { JoystickSensitivity } from './Layout/Setting/JoystickSensitivity/JoystickSensitivity';
import { WearingPosition } from './Layout/Setting/WearingPosition/WearingPosition';
import { DefaultFunctions } from './Layout/Setting/DefaultFunction/DefaultFunctions';
import { Rom } from './Layout/Setting/ROM/Rom';
import { PrivateRoute } from '../HOCs/PrivateRoute';
import style from './App.module.css';

export const App = () => {
  return (
    <div className={style.App}>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/wearing" element={<Wearing />} />
        <Route path="/testing" element={<AutomaticMode />} />
        <Route path="/errorwarning" element={<ErrorWarning />} />
        <Route path="/setting" element={<SettingMenu />} />
        <Route path="/axisspeed" element={<AxisSpeed />} />
        <Route path="/axisspeed_advance" element={<AxisSpeedAdvance />} />
        <Route path="/sensitivity" element={<JoystickSensitivity />} />
        <Route path="/wearingposition" element={<WearingPosition />} />
        <Route path="/default_function" element={<DefaultFunctions />} />
        <Route path="/rom" element={<Rom />} />
        <Route path="/diagnostics" element={<Diagnostics />} />
      </Routes>
    </div>
  );
};
