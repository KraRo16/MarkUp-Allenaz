import React from 'react';
import style from './Navbar.module.css';
import { MdLogout } from 'react-icons/md';
import { Link } from 'react-router-dom';
// import { BsCaretDownFill, BsCaretUpFill } from 'react-icons/bs';
// import { Subnav } from './Subnav/Subnav';

export const Navbar = () => {
  // const [showMenu, setShowMenu] = useState('');

  // function handleMenuClick() {
  //   setShowMenu(!showMenu);
  // }

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
              <Link to="/errorwarning" className={style.sub_item_link}>
                Error/Warning
              </Link>
            </li>
            <li className={style.sub_item}>
              <a className={style.sub_item_link} href="/">
                Exercises
              </a>
            </li>
            <li className={style.sub_item}>
              <a className={style.sub_item_link} href="/">
                Setting
              </a>
            </li>
            <li className={style.sub_item}>
              <a className={style.sub_item_link} href="/">
                Diagnostics
              </a>
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
      </header>
      {/* <button className={style.header_subnav_btn}> */}
      {/* {showMenu ? <BsCaretUpFill size={18} /> : <BsCaretDownFill size={18} />} */}
      {/* </button> */}
      {/* {showMenu && <Subnav />} */}
    </div>
  );
};
