import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Welcome from './pages/Welcome';
import { connect } from 'react-redux';
import { simpleAction } from './actions/simpleAction'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  }

  simpleAction = (event) => {
    this.props.simpleAction();
  }

  render() {
    return (
      <Router>
      <div className="App">        
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/welcome">About</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route path="/welcome" component={Welcome} />
          </div>        
      </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
