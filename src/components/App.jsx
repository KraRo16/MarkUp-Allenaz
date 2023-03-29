import React, { useState } from 'react';
import { LoginForm } from './Login/LoginForm/LoginForm';
import { AutomaticMode } from './Layout/AutomaticMode/AutomaticMode';
// import { Home } from './Layout/Home/Home';
// import { PatientForm } from './Layout/PatientForm/PatientForm';
import style from './App.module.css';

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleLogin() {
    setIsLoggedIn(true);
  }

  return (
    <div className={style.App}>
      {isLoggedIn ? <AutomaticMode /> : <LoginForm onLogin={handleLogin} />}
      {/* <PatientForm /> */}
    </div>
  );
};
