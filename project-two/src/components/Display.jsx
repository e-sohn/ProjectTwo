import React from 'react';

const Display = (props) => {

  const { wallpaper, handleSubmitPic } = props;

  return (
    <div className='wrapper'>
      <img
        src={wallpaper.src.medium}
        id={wallpaper.id}
        alt={`Number ${wallpaper.id}`}
        className='images' />
      <span className='info'>
        <span className='photographer'>{wallpaper.photographer}</span>
        <div id={wallpaper.id}
          onClick={handleSubmitPic}
          className='save'><i className="far fa-heart"></i></div>
      </span>
    </div>
  )
}
export default Display;
