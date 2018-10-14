import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {simpleAction} from './actions/simpleAction';
import Home from './pages/Home';
import Welcome from './pages/Welcome';
import Iframe from './pages/Iframe';
import WidgetPage from './pages/WidgetPage';
import Stats from './pages/Stats';
import './App.css';
import ReportPage from './pages/ReportPage';

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
            <Route exact path="/" component={Home} />
            <Route path="/welcome" component={Welcome} />
            <Route path="/stats" component={Stats} />
            <Route path="/iframe/:domainname" component={Iframe} />
            <Route path="/widget/:domainname" component={WidgetPage} />
            <Route path="/reports" component={ReportPage} />
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
