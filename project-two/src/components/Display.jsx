import React from 'react';

const Display = (props) => {

  const { wallpaper, handleClick } = props;

  return (
    <div className='wrapper'>
      <img
        src={wallpaper.src.medium}
        alt={`Number ${wallpaper.id}`}
        className='images' />
      <span className='info'>
        <span className='photographer'>{wallpaper.photographer}</span>
        <div id={wallpaper.id}
          onClick={handleClick}
          className='save'><i className="far fa-heart"></i></div>
      </span>
    </div>
  )
}
export default Display;
