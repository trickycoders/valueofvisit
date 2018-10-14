import React, {Component} from 'react';
import s from './ShowCnameLinks.module.css';

class ShowCnameLinks extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cnameValues: null
        }
    }

    componentDidMount() {
        if(typeof(Storage) !== 'undefined') {
            let cname = JSON.parse(localStorage.getItem("cnamesValues") || "[]");
            console.log(cname);

            this.setState({
                cnameValues: cname
            });
        }
    }

    render() {
        const {
            cnameValues,
        } = this.state;
        console.log(cnameValues);
        return(
            <div className={s['cname-box']}>
                <div className={s['cname-header']}>Connected Domains</div>
                {cnameValues && cnameValues.map(cnameValue => (
                    <div key={cnameValue.type+cnameValue.cname} className={s['cname-item']}> 
                        <div>                            
                            <a href={`/iframe/${cnameValue.cname}`} >{cnameValue.cname}</a>
                        </div>                        
                    </div>
                    ))
                }                
            </div>
        )
    }
}

export default ShowCnameLinks;