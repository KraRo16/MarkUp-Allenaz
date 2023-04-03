import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoginForm } from './Login/LoginForm/LoginForm';
import { AutomaticMode } from './Layout/AutomaticMode/AutomaticMode';
import { ErrorWarning } from './Layout/ErrorWarning/ErrorWarning';
import { Diagnostics } from './Layout/Diagnostics/Diagnostics';
import style from './App.module.css';

export const App = () => {
  return (
    <div className={style.App}>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<AutomaticMode />} />
        <Route path="/errorwarning" element={<ErrorWarning />} />
        <Route path="/diagnostics" element={<Diagnostics />} />
      </Routes>
    </div>
  );
};
