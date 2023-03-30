import React, {useState} from 'react';
import style from '../Login.module.css'
import { Link } from 'react-router-dom';

export const LoginForm = ({onLogin}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
      event.preventDefault();
      onLogin();
    }


  return (
    <div className={style.section}>
      <div className={style.auth_form_container}>
        <h2 className={style.auth_form_title}>
          Ally<span className={style.logo_title_color}>Arm</span>
        </h2>
        <form className={style.login_form} onSubmit={handleSubmit}>
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
          <Link
            style={{ color: 'inherit', textDecoration: 'inherit' }}
            to="/home"
          >
            <button className={style.login_btn} type="submit">
              Login
            </button>
          </Link>
        </form>
        {/* <button className={style.login_btn_link}>
          Don't have an account? Register here
        </button> */}
      </div>
    </div>
  );
}