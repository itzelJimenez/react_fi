import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  

  addOne = () => {
    this.setState({
      count: this.state.count+1
    })
  }
  
  minusOne = () => {
    this.setState({
      count: this.state.count-1
    })
  }

  constructor(props){
    super(props);
    this.state = 
      {
        count: 0,
      };
  }

  render() {
    return (
      <div className="App">
        <h1>Count : {this.state.count} </h1>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.minusOne}>-1</button>
      </div>
    );
  }
}

export default App;
