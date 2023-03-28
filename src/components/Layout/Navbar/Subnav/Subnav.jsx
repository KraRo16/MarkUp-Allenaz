import React from 'react';
import style from './Subnav.module.css';

export const Subnav = () => {
  return (
    <nav className={style.subnavigation}>
      <ul className={style.sub_list}>
        <li className={style.sub_item}>
          <a className={style.sub_item_link} href="/">Initialization</a>
        </li>
        <li className={style.sub_item}>
          <a className={style.sub_item_link} href="/">Exercises</a>
        </li>
        <li className={style.sub_item}>
          <a className={style.sub_item_link} href="/">Setting</a>
        </li>
        <li className={style.sub_item}>
          <a className={style.sub_item_link} href="/">Diagnostics</a>
        </li>
      </ul>
    </nav>
  );
};
