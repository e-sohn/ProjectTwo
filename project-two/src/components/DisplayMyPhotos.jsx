import React from 'react';

const DisplayMyPhotos = (props) => {
  const { wallpaper, handleClickCollection } = props;

  return (
    <div className='wrapper'>
      <img
        src={wallpaper.src.medium}
        onClick={handleClickCollection}
        id={wallpaper.id}
        alt={`Number ${wallpaper.id}`}
      />
      <div className='photographer'>Photo taken by {wallpaper.photographer}</div>
    </div>
  )
}

export default DisplayMyPhotos;
