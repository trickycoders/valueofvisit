import React, {Component} from 'react';
import './CnameLink.css';

class CnameLink extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cnameValue: '',
            isWidgetLinkVisible: false,
            cnamesValue:null
        }
    }

    componentDidMount(){
        let cnamesValue = null;
        if(typeof(Storage) !== 'undefined') {
            cnamesValue = localStorage.getItem('cnamesValues');
        }

        if(cnamesValue) {
            this.setState({
                cnames: cnamesValue,
            });
        }
    }

    linkMyCname = () => {
        const {
            cnameValue,
        } = this.state;

        this.setState({
            isDomainLinked: true,
        });

        if(typeof(Storage) !== 'undefined') {
            let cname = JSON.parse(localStorage.getItem("cnamesValues") || "[]");
            cname.push({type: 'iframe', cname: `${cnameValue}`});
            localStorage.setItem("cnamesValues", JSON.stringify(cname));
        }
        // this.props.toggleCNAMELinkBox();

        console.log('cnameValue: ', cnameValue);
        window.location.reload();
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
            <div className={'cnameMsg'}>Point your domains CNAME to <a href='' style={{cursor:'not-allowed'}}>cname.blankpagesaveslives.com</a></div>
            <div>
                <input type='text ' name='cnameValue' className='cnameValue' value={cnameValue} onChange={this.setCnameValue} placeholder="Your Domain Name"/>
            </div>
            <div className={'action-box'}>            
                <button onClick={this.linkMyCname}>Link ME</button>
                <span href='#'onClick={this.props.toggleCNAMELinkBox}>Cancel</span>
            </div>
        </div>
        );
    }
}

export default CnameLink;