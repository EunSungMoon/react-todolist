import './App.scss'
import React, { Component } from 'react';
import HeadForm from './components/headForm';
import MainForm from './components/mainForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeadForm></HeadForm>
        <MainForm></MainForm>
      </div>

    )
  }
}

export default App;
