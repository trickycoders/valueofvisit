import React, { Component } from 'react';
import s from './Menu.module.css';
import { Link } from 'react-router-dom'

const Menu = () => (
    <div className={s['header']}>
      <div className={s['header-inner']}>
            <div className={s['header-logo']}>Blank Page Saves Lives</div>
            <div>
              <Link to='/welcome' className={s['header-link']}>Welcome</Link>
              <Link to='/reports' className={s['header-link']}>Stats</Link>
              Logout
            </div>
      </div>
    </div>
  );

export default Menu;