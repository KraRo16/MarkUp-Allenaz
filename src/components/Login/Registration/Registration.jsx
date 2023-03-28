import React, { useState } from 'react';
import style from '../Login.module.css'

export const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={style.auth_form_container}>
      <h2>AllyArm</h2>
      <h3>Registration</h3>
      <form className={style.register_form}>
        <label className={style.login_label} htmlFor="name">
          Full name
          <input
            className={style.login_input}
            value={name}
            onChange={e => setName(e.target.value)}
            name="name"
            type="name"
            id="name"
            placeholder="Full name"
          />
        </label>
        <label className={style.login_label} htmlFor="email">
          Email
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
      <button className={style.login_btn_link}>
        Already have an account? Login here
      </button>
    </div>
  );
};
