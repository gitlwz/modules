import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Logo from './src/index.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        	<Logo/>
        </p>
      </div>
    );
  }
}

export default App;
