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
      currentWallpaper: {
        src: {
          original: 'https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?cs=srgb&dl=adventure-alpine-climb-869258.jpg&fm=jpg'
        }
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmitPic = this.handleSubmitPic.bind(this);
    this.handleSubmitWallpaper = this.handleSubmitWallpaper.bind(this);
    this.handleSubmitRandom = this.handleSubmitRandom.bind(this);
    this.handleClickCollection = this.handleClickCollection.bind(this);
  }

  async getRandom() {
    const random = await fetchRandomWallpaper();
    this.setState({
      random: random
    })
  }

  handleClick(ev) {
    const { id } = ev.target;
    let selected = this.state.wallpapers.photos.filter(wallpaper =>
      wallpaper.id === Number(id))[0];
    this.setState({
      currentPic: selected
    })
  }

  handleClickCollection(ev) {
    const { id }= ev.target;
    let selected = this.state.collection[id];
    this.setState({
      currentPic: selected
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
    const { currentPic } = this.state;
    this.setState(prevState => ({
      collection: {
        ...prevState.collection,
        [currentPic.id]: currentPic
      }
    }))
  }

  handleSubmitRandom(ev) {
    ev.preventDefault();
    const random = this.state.random.photos[0];
    this.setState(prevState => ({
      collection: {
        ...prevState.collection,
        [random.id]: random
      }
    }))
  }

  handleSubmitWallpaper(ev) {
    ev.preventDefault();
    const { currentPic } = this.state;
    this.setState({
      currentWallpaper: currentPic
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
      handleClickCollection,
      handleSubmitPic,
      handleSubmitWallpaper,
      handleSubmitRandom } = this;
    const image = this.styleImage();
    const style = {
      backgroundImage: `url(${image})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: `center`,
      backgroundSize: '100% auto',
      backgroundAttachment: 'fixed'
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
          handleClickCollection={handleClickCollection}
          handleSubmitPic={handleSubmitPic}
          handleSubmitWallpaper={handleSubmitWallpaper}
          handleSubmitRandom={handleSubmitRandom}
          />
        <Footer />
      </div>
    );
  }
}

export default App;
