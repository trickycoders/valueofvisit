import React, { Component } from 'react';
import Menu from '../components/Menu/Menu';
import s from './welcome.module.css';
import Widget from '../components/Widget/Widget';
import CnameLink from '../components/CnameLink/CnameLink';
import WidgetLink from '../components/WidgetLink/WidgetLink';
import ShowCnameLinks from '../components/ShowCnameLinks/ShowCnameLinks';

class Welcome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isCnameLinkVisible: true,
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

    render(){
        const {
            isCnameLinkVisible,
            isWidgetLinkVisible,
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

                <div className={s['integeration-options']}>
                {isCnameLinkVisible && <CnameLink toggleCNAMELinkBox={this.toggleCNAMELinkBox}/>}
                {isWidgetLinkVisible && <WidgetLink />}
                
                </div>
                <div className={s['integeration-options']}>
                    <ShowCnameLinks />     
                </div>   

 


                

                <div>
                    


                </div>
        </div>
        )
    }
}


  export default Welcome;