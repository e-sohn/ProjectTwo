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
      <span className='photographer'>{wallpaper.photographer}</span>
    </div>
  )
}
export default Display;
