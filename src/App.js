import React from 'react';
import './App.css';
import Header from './components/Header';
import Mission from './components/Mission';

export default class App extends React.Component {
  render() {
    return (
      <div id="main">
        <Header/>
        <Mission/>
      </div>
    )
  }
}
