import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person'
import Header from './Header'
import Banner from './Banner'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <Banner/>
        {/**/}
      </div>
    );
  }
}

export default App;
