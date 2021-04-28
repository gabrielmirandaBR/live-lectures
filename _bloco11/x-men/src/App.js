import React, { Component } from 'react';
import './App.css';
import XmenList from './components/XMenList';
import xmenData from './data';

class App extends Component {
  render() {
    return (
      <section className = 'main-content'>
        <XmenList  XMenList = { xmenData }/>
      </section>
    );
  }
}

export default App;
