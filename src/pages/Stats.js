import React, { Component } from 'react';
import s from './Stats.module.css';

const Stats = () => (
    <div>
    <div className={s['outer']}>
        <div className={s['stats']}>
            <h1 className={s['header']}>2 %</h1>
            <p className={s['header-subtext']}>See <strong>404 pages</strong></p>        
        </div>            

        <div className={s['stats']}>
            <h1 className={s['header']}>326.4 M registered domains </h1>
            <p className={s['header-subtext']}>Less then <strong>5 Million active websites</strong>. Other domains are <strong>404/Parked domains</strong></p>        
        </div>            
    </div>
    <h1 className={s['header']}>
            Lets give a purpose for the people who visiting these pages
        </h1>

    </div>
  );

export default Stats;