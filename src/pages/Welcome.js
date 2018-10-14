import React, { Component } from 'react';
import Menu from '../components/Menu/Menu';
import s from './welcome.module.css';
import Widget from '../components/Widget/Widget';

const Welcome = () => (
    <div className={s.hello}>
      <Menu />
      <h2>
        Integerate 
      </h2>

      <div className={s.integeration}>
          <a className={s.options}>
              Unused Domains
          </a>
          <a className={s.options}>
              404 Pages Widget
          </a>      
      </div>

      <div>
        <div>Thanks You</div>
        <div>
            <div> Funds Raised </div>
            <div> Views </div>
        </div>
      </div>

      <Widget />

    </div>
  );

  export default Welcome;