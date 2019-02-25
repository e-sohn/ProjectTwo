import React from 'react';
import { Route } from "react-router-dom";
import MyPhotos from './MyPhotos';
import ChoosePhotos from './ChoosePhotos';
import Random from './Random';

const Main = (props) => {
  return (
    <div>
      <Route exact path="/myphotos" render={MyPhotos} />
      <Route path="/choosephotos" render={ChoosePhotos} />
      <Route path="/random" render={Random} />
    </div>
  )
}
export default Main;
