import React, { Component } from 'react';
import { withRouter } from "react-router";
import s from './TopBar.module.css';

const TopBar = (props) => {
  const {
      match: {
          params: {
              domainname
          } = {}
      } = {}
  } = props;

  return (
    <div className={s['top-bar']}>
        <div className={s.header}>
          <strong>{domainname}</strong> is not live yet
        </div>
        <div className={s['message']}>We don't want to show you an blank place until we are ready. We want to give a value for the visit</div>
        <div className={s['message-name']}>
          You can support this campaign to save <strong>Keethana's</strong> life
        </div>

        <div className={s['linkback']}>
          Goto <a href='https://milaap.org'>milaap.org</a> | Having a unused domain? Connect to <a href='https://blackpagesavelives.com'>BlackPageSavelives.com</a> to save some one live.q
        </div>
    </div>
  );
}

export default withRouter(TopBar);