import React from 'react';
import style from './Navbar.module.css';
import { MdLogout } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Sidebar } from './Sidebar/Sidebar';

export const Navbar = () => {


  return (
    <div className={style.navigation}>
      <header className={style.header_navbar}>
        <h1 className={style.header_title}>
          <Link
            style={{ color: 'inherit', textDecoration: 'inherit' }}
            to="/home"
          >
            Ally<span className={style.logo_title_color}>Arm</span>
          </Link>
        </h1>
        <nav className={style.subnavigation}>
          <ul className={style.sub_list}>
            <li className={style.sub_item}>
              <Link to="/wearing" className={style.sub_item_link}>
                Wearing
              </Link>
            </li>
            <li className={style.sub_item}>
              <Link to="/errorwarning" className={style.sub_item_link}>
                Error/Warning
              </Link>
            </li>
            <li className={style.sub_item}>
              <Link to="/testing" className={style.sub_item_link}>
                Test
              </Link>
            </li>
            <li className={style.sub_item}>
              <a className={style.sub_item_link} href="/">
                Setting
              </a>
            </li>
            <li className={style.sub_item}>
              <Link to="/diagnostics" className={style.sub_item_link}>
                Diagnostics
              </Link>
            </li>
          </ul>
        </nav>
        <form className={style.header_form}>
          <input
            className={style.header_search_input}
            type="text"
            placeholder="Search"
          />
          <button className={style.header_search_btn} type="submit">
            <span>Search</span>
          </button>
        </form>
        <div className={style.header_user_info}>
          <p className={style.header_user_position}>Admin: </p>
          <p className={style.header_user_name}>Roman</p>
        </div>
        <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/">
          <button className={style.header_logout_logo} type="submit">
            <MdLogout size={24} />
          </button>
        </Link>
        <div className={style.sidebar}>
          <Sidebar />
        </div>
      </header>
    </div>
  );
};
