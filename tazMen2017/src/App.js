import React, { Component } from 'react';
import Header from './cmps/Header'
import Registration from './cmps/Registration'
import Documents from './cmps/Documents.js'
import Tazopia from './cmps/Tazopia'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Header />

        <Registration />

        <Documents />

        <Tazopia />

      </div>
    );
  }
}

export default App;
