import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import { fetchWallpaper, fetchRandomWallpaper } from './services/wallpaper';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      wallpaper: {}
    }
  }

  async getWallpapers() {
    const wallpaper = await fetchWallpaper();
    this.setState({
      wallpaper: wallpaper
    })
  }

  async getRandom() {
    const random = await fetchRandomWallpaper();
    this.setState({
      wallpaper: random
    })
  }

  componentDidMount() {
    this.getWallpapers();
    this.getRandom();
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
