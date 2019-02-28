import React from 'react';

const Display = (props) => {

  const { wallpaper, handleClick } = props;

  return (
    <div className='wrapper'>
      <img
        src={wallpaper.src.medium}
        onClick={handleClick}
        id={wallpaper.id}
        alt={`Number ${wallpaper.id}`}
        className='images' />
      <div className='photographer'>Photo taken by {wallpaper.photographer}</div>
    </div>
  )
}
export default Display;
