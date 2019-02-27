import React from 'react';

const DisplayRandom = (props) => {

  const { wallpaper } = props;

  return (
    <div>
      <img
        src={wallpaper.src.landscape}
        alt='Picture from Pixel'
        id={wallpaper.id}
      />
      <div>Photo taken by {wallpaper.photographer}</div>
    </div>
  )
}
export default DisplayRandom;
