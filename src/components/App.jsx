import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Layout/Home/Home';
import { LoginPage } from './Page/LoginPage';
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
import { PublicRoute } from '../HOCs/PublicRoute';
import style from './App.module.css';

// const LoginForm = lazy(() => import('./Login/LoginForm/LoginForm'));
// const Home = lazy(() => import('./Layout/Home/Home'));
// const AutomaticMode = lazy(() => import('./Layout/AutomaticMode/AutomaticMode'));
// const ErrorWarning = lazy(() => import('./Layout/ErrorWarning/ErrorWarning'));
// const Diagnostics = lazy(() => import('./Layout/Diagnostics/Diagnostics'));
// const Wearing = lazy(() => import('./Layout/Wearing/Wearing'));
// const SettingMenu = lazy(() => import('./Layout/Setting/SettingMenu/SettingMenu'));
// const AxisSpeed = lazy(() => import('./Layout/Setting/AxisSpeed/AxisSpeed'));
// const AxisSpeedAdvance = lazy(() => import('./Layout/Setting/AxisSpeedAdvance/AxisSpeedAdvance'));
// const JoystickSensitivity = lazy(() => import('./Layout/Setting/JoystickSensitivity/JoystickSensitivity'));
// const WearingPosition = lazy(() => import('./Layout/Setting/WearingPosition/WearingPosition'));
// const DefaultFunctions = lazy(() => import('./Layout/Setting/DefaultFunction/DefaultFunctions'));
// const Rom = lazy(() => import('./Layout/Setting/ROM/Rom'));

export const App = () => {
  return (
    <div className={style.App}>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/home"
          element={
            <PrivateRoute restricted>
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
