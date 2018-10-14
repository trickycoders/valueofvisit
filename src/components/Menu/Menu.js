import React, { Component } from 'react';
import s from './Menu.module.css';

const Menu = () => (
    <div className={s['header']}>
      <div className={s['header-inner']}>
            <div className={s['header-logo']}>Blank Page Saves Lives</div>
            <div>Logout</div>
      </div>
    </div>
  );

export default Menu;