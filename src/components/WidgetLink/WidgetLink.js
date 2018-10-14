import React, { Component } from 'react';
import Widget from '../Widget/Widget';
import './WidgetLink.css';

class WidgetLink extends Component{
    constructor(props) {
        super(props);

        this.state = {
            domainNameValue: 'test.com'
        }
    }

    handleOnChange = (event) => {
        this.setState({
            domainNameValue: event.target.value,
        });
    }

    render() {
        const {
            domainNameValue,
        } = this.state;

        const domainLink = `https://blackpagesavelives.now.sh/widget/${domainNameValue}`;
        const textAreaValue = `<iframe width='400' height='645' src='${domainLink}' style='border: 0px;width: 420px;'></iframe>`;
        return(
            <div className={'linkWidgetBox'}>
                <div className='linkWidgetBoxCol'> 
                <div>
                    <Widget domain={domainNameValue}/>
                </div>
                <div style={{padding: '20px 0px 20px 20px'}}>
                    <div className='title-label'>Add 404 Widget</div>
                    <div style={{fontSize: '14px', marginBottom: '5px'}}>Enter Your Domain Name, e.g; google.com</div>
                    <input type='text' value={domainNameValue} name = 'domainNameValue'  className={'domainNameValue'} onChange={this.handleOnChange} placeholder='Enter Your Domain Name, e.g; google.com'/>
                    <label className='title-label'> Preview </label>
                    <textarea value={textAreaValue} readOnly className={'embed-textarea'} id='embed-textarea'/>
                </div>
                </div>
            </div>
        )
    }
}

export default WidgetLink;