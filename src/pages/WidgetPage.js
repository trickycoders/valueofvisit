import React, { Component } from 'react';
import Menu from '../components/Menu/Menu';
import s from './welcome.module.css';
import Widget from '../components/Widget/Widget';

const WidgetPage = () => (
    <div className={s.hello}>
        <Widget />
    </div>
  );

  export default WidgetPage;