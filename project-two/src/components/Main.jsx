import React from 'react';
import { Route } from "react-router-dom";
import MyPhotos from './MyPhotos';
import ChoosePhotos from './ChoosePhotos';
import Random from './Random';

const Main = (props) => {
  return (
    <div className='main'>

      <Route exact path="/" />

      <Route path="/myphotos" render={() => (
        <MyPhotos collection={props.collection} />
        )} />

      <Route path="/choosephotos" render={() => (
        <ChoosePhotos wallpapers={props.wallpapers} />
        )} />

      <Route path="/random" render={() => (
        <Random random={props.random} />
        )} />

    </div>
  )
}
export default Main;
