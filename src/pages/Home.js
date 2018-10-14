import React, { Component } from 'react';
import s from './Home.module.css';
import { Link } from 'react-router-dom'

const Home = () => (
    <div>
        <h1 className={s['header']}>Blank Page Saves Lives</h1>
        <p className={s['header-subtext']}>Let your your unused domains and 404 pages save some lives</p>
        <Link to='/welcome' className={s['signup-btn']}>Get Stared</Link>
    </div>
  );

export default Home;