import React, {useState} from 'react';
import style from '../Login.module.css'

export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



  return (
    <div className={style.section}>
      <div className={style.auth_form_container}>
        <h2 className={style.auth_form_title}>AllyArm</h2>
        <form className={style.login_form}>
          <label className={style.login_label} htmlFor="email">
            Login
            <input
              className={style.login_input}
              value={email}
              onChange={e => setEmail(e.target.value)}
              name="email"
              type="email"
              id="email"
              placeholder="Please enter email or login"
            />
          </label>
          <label className={style.login_label} htmlFor="password">
            Password
            <input
              className={style.login_input}
              value={password}
              onChange={e => setPassword(e.target.value)}
              name="password"
              type="password"
              id="password"
              placeholder="************"
            />
          </label>
          <button className={style.login_btn} type="submit">
            Login
          </button>
        </form>
        {/* <button className={style.login_btn_link}>
          Don't have an account? Register here
        </button> */}
      </div>
    </div>
  );
}