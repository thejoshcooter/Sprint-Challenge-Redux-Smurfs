import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Form from './Form';
import Village from './Village';
import {Route, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions'

class App extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.fetchSmurfs()
}
  
  render() {
    return (
      <div className="App">
        <Nav />
        <Route exact path='/' component={Village} />
        <Route exact path='/form' component={Form} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetching: state.fetching
  }
};

export default connect(mapStateToProps, { fetchSmurfs })(App);
