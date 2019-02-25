import React, { Component } from 'react';
import { fetchWallpaper, fetchRandomWallpaper } from './services/wallpaper';
import Main from './components/Main';
import Header from './components/Header';
import Footer from './components/Footer';
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
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
