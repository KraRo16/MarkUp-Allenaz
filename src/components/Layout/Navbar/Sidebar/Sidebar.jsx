import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import { Link } from 'react-router-dom';
import style from './Sidebar.module.css';
import { MdLogout } from 'react-icons/md';

export const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={style.burger}>
      <Hamburger toggled={open} className={style.hamburger} toggle={setOpen} />
      {open && (
        <div className={style.burger_menu}>
          <Link to="/home" className={style.burger_menu_item}>
            Home
          </Link>
          <Link to="/wearing" className={style.burger_menu_item}>
            Wearing
          </Link>
          <Link to="/errorwarning" className={style.burger_menu_item}>
            Error/Warning
          </Link>
          <Link to="/testing" className={style.burger_menu_item}>
            Test
          </Link>
          <Link to="/setting" className={style.burger_menu_item}>
            Setting
          </Link>
          <Link to="/diagnostics" className={style.burger_menu_item}>
            Diagnostics
          </Link>
          <div className={style.burger_user_info}>
            <p className={style.burger_user_position}>Admin: </p>
            <p className={style.burger_user_name}>Roman</p>
          </div>
          <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/">
            <button className={style.burger_logout_logo} type="submit">
              <MdLogout size={24} />
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};
