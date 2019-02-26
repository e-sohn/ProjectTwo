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
      input: '',
      currentid: {},
      currentWallpaper: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmitPic = this.handleSubmitPic.bind(this);
    this.handleSubmitWallpaper = this.handleSubmitWallpaper.bind(this);
  }

  async getRandom() {
    const random = await fetchRandomWallpaper();
    this.setState({
      random: random
    })
  }

  handleClick(ev) {
    const id = ev.target.id;
    let selected = this.state.wallpapers.photos.filter(wallpaper =>
      wallpaper.id === Number(id))[0];
    this.setState({
      currentid: selected
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

  handleSubmitPic(ev) {
    ev.preventDefault();
    const currentid = this.state.currentid;
    this.setState(prevState => ({
      collection: {
        ...prevState.collection,
        [currentid.id]: currentid
      }
    }))
  }

  handleSubmitWallpaper(ev) {
    ev.preventDefault();
    const { currentid } = this.state;
    this.setState({
      currentWallpaper: currentid
    })
  }

  styleImage() {
    return (Object.keys(this.state.currentWallpaper).length === 0) ? 'none' : this.state.currentWallpaper.src.large
  }

  componentDidMount() {
    this.getRandom();
  }

  render() {
    const { collection, wallpapers, random, input, currentWallpaper } = this.state;
    const { handleChange, handleSubmit, handleClick, handleSubmitPic, handleSubmitWallpaper } = this;
    const image = this.styleImage();

    return (
      <div className="App" style={{backgroundImage: `url(${image})`}}>
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
          handleSubmitWallpaper={handleSubmitWallpaper}
          />
        <Footer />
      </div>
    );
  }
}

export default App;
