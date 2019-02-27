import React from 'react';

const DisplayMyPhotos = (props) => {
  const { wallpaper, handleClickCollection } = props;

  return (
    <div>
      <img
        src={wallpaper.src.medium}
        onClick={handleClickCollection}
        id={wallpaper.id}
      />
      <div>Photo taken by {wallpaper.photographer}</div>
    </div>
  )
}

export default DisplayMyPhotos;
