import React from "react";
import { LoginForm } from "./Login/LoginForm/LoginForm";
// import { Registration } from "./Login/Registration/Registration";
import { Navbar } from "./Layout/Navbar/Navbar";
import { Home } from "./Layout/Home/Home";
import style from './App.module.css'


export const App = () => {

  return (
    <div className={style.App}>
      <LoginForm />
      <Navbar />
      <Home />
    </div>
  );
}