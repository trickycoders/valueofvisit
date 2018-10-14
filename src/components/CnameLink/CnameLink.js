import React, {Component} from 'react';
import './CnameLink.css';

class CnameLink extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cnameValue: '',
            isWidgetLinkVisible: false,
        }
    }


    linkMyCname = () => {
        const {
            cnameValue,
        } = this.state;

        this.setState({
            isDomainLinked: true,
        });
        // this.props.toggleCNAMELinkBox();

        console.log('cnameValue: ', cnameValue);
        alert('Successfully linked. Thank you.');
    }

    setCnameValue = (event) => {
        this.setState({
            cnameValue: event.target.value,
        });
    }

    render() {

        const {
            cnameValue,
        } = this.state;

        return(
        <div className={'linkCnameBox'}>
            <div className={'cnameMsg'}>Point your domains CNAME to <a href='' style={{cursor:'not-allowed'}}>cname.emptypagesaveslives.com</a></div>
            <input type='text ' name='cnameValue' className={'cnameValue'} value={cnameValue} onChange={this.setCnameValue}/>
            <button onClick={this.linkMyCname}>Link ME</button> <button onClick={this.props.toggleCNAMELinkBox}>Cancel</button>
        </div>
        );
    }
}

export default CnameLink;