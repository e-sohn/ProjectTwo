import React from 'react';
import { Route } from "react-router-dom";
import MyPhotos from './MyPhotos';
import ChoosePhotos from './ChoosePhotos';
import Random from './Random';
import Home from './Home';

const Main = (props) => {

  const { collection,
    wallpapers,
    input,
    handleChange,
    handleSubmit,
    handleClick,
    handleClickWallpaper,
    handleClickRandom } = props;
  const random = props.random.photos;

  return (
    <div className='main'>

      <Route exact path="/" render={Home} />

      <Route path="/myphotos" render={() => (
        <MyPhotos
          collection={collection}
          handleClickWallpaper={handleClickWallpaper}
          />
        )} />

      <Route path="/choosephotos" render={() => (
        <ChoosePhotos
          wallpapers={wallpapers}
          input={input}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleClick={handleClick}
          />
        )} />

      <Route path="/random" render={() => (
        <Random
          random={random}
          handleClickRandom={handleClickRandom}
          />
        )} />

    </div>
  )
}
export default Main;
