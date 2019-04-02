import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const params = {
  client_id: '',
  redirect_uri: '',
};

class App extends Component {
  render() {
    const genQS = (params) => (
      Object.keys(params)
        .map(k => encodeURI(k) + '=' + encodeURI(params[k]))
        .join('&')
    );
    const link = `https://github.com/login/oauth/authorize?${genQS(params)}`;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href={link}>
            Login with GitHub
          </a>
        </header>
      </div>
    );
  }
}

export default App;
