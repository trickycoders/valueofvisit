import React, { Component } from 'react';
import Widget from '../Widget/Widget';
import './WidgetLink.css';

class WidgetLink extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={'linkWidgetBox'}>
                <div>Add 404 Widget</div>
                <input type='text' name = 'domainNameValue'  className={'domainNameValue'}/>
                <div>
                    <Widget domain='google.com'/>
                </div>
                <textarea value='hello' readOnly className={'embed-textarea'}/>
                <div>
                    <div> Funds Raised </div>
                    <div> Views </div>
                </div>
            </div>
        )
    }
}

export default WidgetLink;