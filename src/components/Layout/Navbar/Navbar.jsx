import React, {useState} from 'react';
import style from './Navbar.module.css';
import { MdLogout } from 'react-icons/md';
import { BsCaretDownFill, BsCaretUpFill } from 'react-icons/bs';
import { Subnav } from './Subnav/Subnav';

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState('');

  function handleMenuClick() {
    setShowMenu(!showMenu);
  }

  return (
    <div className={style.navigation}>
      <header className={style.header_navbar}>
        <h1 className={style.header_title}>AllyArm</h1>
        <form>
          <input
            className={style.header_search_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search"
          />
          <button className={style.header_search_btn} type="submit">
            <span>Search</span>
          </button>
        </form>
        <div className={style.header_user_info}>
          <p className={style.header_user_position}>Admin: </p>
          <p className={style.header_user_name}>Roman</p>
          <button className={style.header_logout_logo} type="submit">
            <MdLogout size={24} />
          </button>
        </div>
      </header>
      <button className={style.header_subnav_btn} onClick={handleMenuClick}>
        {showMenu ? <BsCaretUpFill size={18} /> : <BsCaretDownFill size={18} />}
      </button>
      {showMenu && <Subnav />}
    </div>
  );
};
