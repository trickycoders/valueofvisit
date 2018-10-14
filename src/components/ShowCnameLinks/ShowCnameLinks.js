import React, {Component} from 'react';

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
            <ul> 
                {cnameValues && cnameValues.map(cnameValue => (
                     <li key={cnameValue.type+cnameValue.cname}>{cnameValue.cname}</li>
                    ))
                }
            </ul>
        )
    }
}

export default ShowCnameLinks;