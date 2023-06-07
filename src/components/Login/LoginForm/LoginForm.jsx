import React, { useState, useEffect } from 'react';
import style from '../Login.module.css';
import { Link } from 'react-router-dom';
import { fetchLogin } from 'auth/fetchLogin';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operation';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);
  const location = useLocation();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  async function handleSubmit(event) {
    // event.preventDefault();

    // try {
    //   const response = await fetchLogin({ email, password });

    //   if (response.status === 200) {
    //     localStorage.setItem('token', response.data.token);
    //     setToken(response.data.token);
    //     console.log('Token:', response.data.token);
    //   } else {
    //     throw new Error('Error occurred during login');
    //   }
    // } catch (error) {
    //   console.error(error.message);
    // }
    event.preventDefault();
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
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
              onChange={handleChange}
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
              onChange={handleChange}
              name="password"
              type="password"
              id="password"
              placeholder="************"
            />
          </label>
          {/* <Link
            style={{ color: 'inherit', textDecoration: 'inherit' }}
            to="/home"
          > */}
          <button className={style.login_btn} type="submit">
            Login
          </button>
          {/* </Link> */}
        </form>
      </div>
    </div>
  );
};
