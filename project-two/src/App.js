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
      currentPic: {},
      currentWallpaper: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleClickWallpaper = this.handleClickWallpaper.bind(this);
    this.handleClickRandom = this.handleClickRandom.bind(this);
  }

  async getRandom() {
    const random = await fetchRandomWallpaper();
    this.setState({
      random: random,
      currentWallpaper: random.photos[0]
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

  handleClick(ev) {
    ev.preventDefault();
    const { id } = ev.currentTarget;
    let selected = this.state.wallpapers.photos.filter(wallpaper =>
      wallpaper.id === Number(id))[0];
    this.setState(prevState => ({
      collection: {
        ...prevState.collection,
        [selected.id]: selected
      }
    }))
  }

  handleClickRandom(ev) {
    ev.preventDefault();
    const random = this.state.random.photos[0];
    this.setState(prevState => ({
      collection: {
        ...prevState.collection,
        [random.id]: random
      }
    }))
  }

  handleClickWallpaper(ev) {
    ev.preventDefault();
    const { id }= ev.currentTarget;
    let selected = this.state.collection[id];
    this.setState({
      currentWallpaper: selected
    })
  }

  styleImage() {
    return (Object.keys(this.state.currentWallpaper).length === 0) ? 'none' : this.state.currentWallpaper.src.original;
  }

  componentDidMount() {
    this.getRandom();
  }

  render() {
    const {
      collection,
      wallpapers,
      random,
      input,
      currentWallpaper } = this.state;
    const {
      handleChange,
      handleSubmit,
      handleClick,
      handleClickWallpaper,
      handleClickRandom } = this;
    const image = this.styleImage();
    const style = {
      backgroundImage: `url(${image})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: `center`,
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
    }

    return (
      <div className="App" style={style}>
        <Header />
        <Main
          collection={collection}
          wallpapers={wallpapers}
          random={random}
          input={input}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleClick={handleClick}
          handleClickWallpaper={handleClickWallpaper}
          handleClickRandom={handleClickRandom}
          />
        <Footer currentWallpaper={currentWallpaper} />
      </div>
    );
  }
}

export default App;
