import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  handlerClickToBarChart(){
    alert('被点击了');
  }  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.handlerClickToBarChart}>打开柱状图</button>
      </div>
    );
  }
}

export default App;
