import React, { Component } from 'react';
import './IframeViewer.css';

export default class IframeViewer extends Component {
    
    componentDidMount() {
        this._updateIframe();
    }

    componentDidUpdate() {
        this._updateIframe();
    }

    _updateIframe() {
        const iframe = this.refs.iframe;
        const doc = iframe.contentWindow.document;
        //doc.querySelector('body').innerHTML = this.props.content
    }

    render() {
        let id = new Date() + '_' + Math.random();
        return (<iframe
            data-id={id}
            ref="iframe"
            className={'preview-iframe'}
            //src={'data:text/html;charset=utf-8,' + encodeURI(this.props.content)}
            src={this.props.url}
        />);
    }
}