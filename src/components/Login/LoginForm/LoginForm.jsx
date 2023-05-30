import React, { useState } from 'react';
import style from '../Login.module.css';
import { Link } from 'react-router-dom';
import { fetchLogin } from 'auth/fetchLogin';
import axios from 'axios';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetchLogin({ email, password });

      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        setToken(response.data.token);
        console.log('Token:', response.data.token);
      } else {
        throw new Error('Error occurred during login');
      }
    } catch (error) {
      console.error(error.message);
    }
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
      </div>
    </div>
  );
};
