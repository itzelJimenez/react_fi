import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person'
import Header from './Header'
import Banner from './Banner'
import TileList from './TileList'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <Banner/>
        <TileList/>
        {/**/}
      </div>
    );
  }
}

export default App;
