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
      random: {},
      input: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async getRandom() {
    const random = await fetchRandomWallpaper();
    this.setState({
      random: random
    })
  }

  handleChange(ev) {
    const { name, value } = ev.target;
    this.setState({
      [name]: value
    })
  }

  async handleSubmit(ev) {
    ev.preventDefault();
    const topic = this.state.input;
    const wallpapers = await fetchWallpaper(topic);
    this.setState({
      wallpapers: wallpapers
    })
  }

  componentDidMount() {
    this.getRandom();
  }

  render() {
    const { collection, wallpapers, random, input } = this.state;
    const { handleChange, handleSubmit } = this;

    return (
      <div className="App">
        <Header />
        <Main
          collection={collection}
          wallpapers={wallpapers}
          random={random}
          input={input}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          />
        <Footer />
      </div>
    );
  }
}

export default App;
