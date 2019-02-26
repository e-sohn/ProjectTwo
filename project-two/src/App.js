import React, { Component } from 'react';
import { fetchWallpaper, fetchRandomWallpaper, fetchFavorite } from './services/wallpaper';
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
      input: '',
      currentid: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmitPic = this.handleSubmitPic.bind(this);
  }

  async getRandom() {
    const random = await fetchRandomWallpaper();
    this.setState({
      random: random
    })
  }

  handleClick(ev) {
    const { id } = ev.target
    this.setState({
      currentid: id
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

  async handleSubmitPic(ev) {
    ev.preventDefault();
    console.log('hello');
    const currentid = this.state.currentid;
    const favorite = await fetchFavorite(currentid);
    this.setState({
      collection: favorite
    })
  }

  componentDidMount() {
    this.getRandom();
  }

  render() {
    const { collection, wallpapers, random, input } = this.state;
    const { handleChange, handleSubmit, handleClick, handleSubmitPic } = this;

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
          handleClick={handleClick}
          handleSubmitPic={handleSubmitPic}
          />
        <Footer />
      </div>
    );
  }
}

export default App;
