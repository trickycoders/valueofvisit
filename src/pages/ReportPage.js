import React, { Component } from 'react';
import Menu from '../components/Menu/Menu';
import s from './welcome.module.css';
import Widget from '../components/Widget/Widget';
import CnameLink from '../components/CnameLink/CnameLink';
import WidgetLink from '../components/WidgetLink/WidgetLink';
import ShowCnameLinks from '../components/ShowCnameLinks/ShowCnameLinks';

class ReportPage extends Component {
    constructor(props) {
        super(props);
    }

    render(){

        return (
            <div className={s['hello']}>
                <Menu />
                <h2>
                    Reports 
                </h2>
                <div style={{display: 'flex', width: '900px', margin: 'auto'}}>
                    <div style={{height: '100px',width: '30%',padding: '30px', background: '#fff', margin: '5px'}}>
                        <div style={{fontSize: '1.5em', color: '#2196F3'}}>Total Fund Raised</div>
                        <div style={{fontSize: '32px', padding: '5px'}}>1,10,570</div>
                    </div>
                    <div style={{height: '100px',width: '30%',padding: '30px', background: '#fff', margin: '5px'}}>
                        <div style={{fontSize: '1.5em', color: '#2196F3'}}>Total Lives Saved</div>
                        <div style={{fontSize: '32px',  padding: '5px'}}>2</div>
                    </div>
                    <div style={{height: '100px',width: '30%',padding: '30px', background: '#fff', margin: '5px'}}>
                        <div style={{fontSize: '1.5em', color: '#2196F3'}}>Total Visitors</div>
                        <div style={{fontSize: '32px', padding: '5px'}}>5,200</div>
                    </div>
                </div>
        </div>
        )
    }
}

export default ReportPage;