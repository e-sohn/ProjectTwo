import React from 'react';

const Display = (props) => {

  const { wallpaper, handleClick } = props;

  return (
    <div>
      <img
        src={wallpaper.src.medium}
        onClick={handleClick}
        id={wallpaper.id}
        className='images' />
      <div>Photo taken by {wallpaper.photographer}</div>
    </div>
  )
}
export default Display;
