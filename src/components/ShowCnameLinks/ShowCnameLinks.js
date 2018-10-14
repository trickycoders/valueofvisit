import React, {Component} from 'react';
// import './ShowCnameLinks/ShowCnameLinks.css';

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
            <div className='linkWidgetBox'>
                <div> 
                    {cnameValues && cnameValues.map(cnameValue => (
                        <div key={cnameValue.type+cnameValue.cname}>{cnameValue.cname}</div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default ShowCnameLinks;