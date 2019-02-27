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
    handleClickCollection,
    handleSubmitPic,
    handleSubmitWallpaper,
    handleSubmitRandom } = props;
  const random = props.random.photos;

  return (
    <div className='main'>

      <Route exact path="/" render={Home} />

      <Route path="/myphotos" render={() => (
        <MyPhotos
          collection={collection}
          handleClickCollection={handleClickCollection}
          handleSubmitWallpaper={handleSubmitWallpaper}
          />
        )} />

      <Route path="/choosephotos" render={() => (
        <ChoosePhotos
          wallpapers={wallpapers}
          input={input}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleClick={handleClick}
          handleSubmitPic={handleSubmitPic}
          />
        )} />

      <Route path="/random" render={() => (
        <Random
          random={random}
          handleSubmitRandom={handleSubmitRandom}
          />
        )} />

    </div>
  )
}
export default Main;
