import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Form from './Form';
import Village from './Village';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Form />
        <Village />
      </div>
    );
  }
}

export default App;
