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
      collection: {},
      wallpapers: {},
      random: {}
    }
  }

  async getWallpapers() {
    const wallpapers = await fetchWallpaper();
    this.setState({
      wallpapers: wallpapers
    })
  }

  async getRandom() {
    const random = await fetchRandomWallpaper();
    this.setState({
      random: random
    })
  }

  componentDidMount() {
    this.getWallpapers();
    this.getRandom();
  }

  render() {
    const { collection, wallpapers, random } = this.state;

    return (
      <div className="App">
        <Header />
        <Main
          collection={collection}
          wallpapers={wallpapers}
          random={random} />
        <Footer />
      </div>
    );
  }
}

export default App;
