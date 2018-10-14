import React, { Component } from 'react';
import IframeViewer from '../components/IframeViewer/IframeViewer';
import TopBar from '../components/TopBar/TopBar';
import Widget from '../components/Widget/Widget';

const Iframe = () => (
    <div>
      <IframeViewer url="https://milaap.org/fundraisers/helplakshay1"/>
      <TopBar />      
    </div>
  );

  export default Iframe;