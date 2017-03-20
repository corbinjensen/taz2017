import React, { Component } from 'react';
import Header from './cmps/Header'
import Registration from './cmps/Registration'
import Documents from './cmps/Documents.js'
import Footer from './cmps/Footer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />

        <Documents />

        <Registration />

        <Footer />

      </div>
    );
  }
}

export default App;
