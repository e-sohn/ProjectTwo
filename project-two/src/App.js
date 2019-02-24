import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import { wallpaper } from './services/wallpaper';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        Hello
      </div>
    );
  }
}

export default App;
