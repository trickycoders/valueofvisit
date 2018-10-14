import React, { Component } from 'react';
import Menu from '../components/Menu/Menu';
import s from './welcome.module.css';
import Widget from '../components/Widget/Widget';


class Welcome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isCnameLinkVisible: false,
            isWidgetLinkVisible: false,
            cnameValue: '',
            isDomainLinked: false,
        };
    }

    toggleCNAMELinkBox = () => {
        this.setState({
            isWidgetLinkVisible: false,
            isCnameLinkVisible: !this.state.isCnameLinkVisible,
        });
    }

    toggleWidgetLinkBox = () => {
        this.setState({
            cnameValue: '',
            isCnameLinkVisible: false,
            isWidgetLinkVisible: !this.state.isWidgetLinkVisible,
        });
    }

    linkMyCname = () => {
        const {
            cnameValue,
        } = this.state;

        this.setState({
            isDomainLinked: true,
        });
        this.toggleCNAMELinkBox();

        console.log('cnameValue: ', cnameValue);
        alert('Successfully linked. Thank you.');
    }

    setCnameValue = (event) => {
        this.setState({
            cnameValue: event.target.value,
        });
    }

    render(){
        const {
            isCnameLinkVisible,
            isWidgetLinkVisible,
            cnameValue,
            isDomainLinked,
        } = this.state;

        return (
            <div className={s['hello']}>
                <Menu />
                <h2>
                    Integerate 
                </h2>

                <div className={s.integeration}>
                    <a className={s.options} onClick={this.toggleCNAMELinkBox}>
                        Unused Domains
                    </a>
                    <a className={s.options} onClick={this.toggleWidgetLinkBox}>
                        404 Pages Widget
                    </a>      
                </div>


                {isCnameLinkVisible && <div className={s['linkCnameBox']}>
                    <div className={s['cnameMsg']}>Point your domains CNAME to <a href='' style={{cursor:'not-allowed'}}>cname.emptypagesaveslives.com</a></div>
                    <input type='text ' name='cnameValue' className={s['cnameValue']} value={cnameValue} onChange={this.setCnameValue}/>
                    <button onClick={this.linkMyCname}>Link ME</button> <button onClick={this.toggleCNAMELinkBox}>Cancel</button>
                    {isDomainLinked && <div>Successfully Linked. Want to link more domain</div>}
                </div>}

                {isWidgetLinkVisible && <div className={s['linkWidgetBox']}>
                    <div>Thanks You</div>
                    <div>
                        <div> Funds Raised </div>
                        <div> Views </div>
                    </div>
                </div>}
                <Widget />
        </div>
        )
    }
}


  export default Welcome;