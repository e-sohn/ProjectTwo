import React from 'react';

const DisplayMyPhotos = (props) => {
  const { wallpaper, handleClickWallpaper } = props;

  return (
    <div className='wrapper'>
      <img
        src={wallpaper.src.medium}
        alt={`Number ${wallpaper.id}`}
        className='images'
      />
      <span className='info'>
        <span className='photographer'>{wallpaper.photographer}</span>
        <div id={wallpaper.id}
          onClick={handleClickWallpaper}
          className='save'><i class="fas fa-plus"></i></div>
      </span>
    </div>
  )
}

export default DisplayMyPhotos;
