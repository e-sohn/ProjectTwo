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
      <span className='photographer'>{wallpaper.photographer}</span>

    </div>
  )
}
export default DisplayRandom;
