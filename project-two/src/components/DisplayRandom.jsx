import React from 'react';

const DisplayRandom = (props) => {

  const { wallpaper } = props;

  return (
    <div className='wrapper'>
      <img
        src={wallpaper.src.large}
        alt={`Number ${wallpaper.id}`}
        id={wallpaper.id}
      />
      <div className='photographer'>Photo taken by {wallpaper.photographer}</div>
    </div>
  )
}
export default DisplayRandom;
