import React from 'react';

const DisplayMyPhotos = (props) => {
  const { wallpaper, handleClickCollection, handleSubmitWallpaper } = props;

  return (
    <div className='wrapper'>
      <img
        src={wallpaper.src.medium}
        onClick={handleClickCollection}
        id={wallpaper.id}
        alt={`Number ${wallpaper.id}`}
      />
      <span className='info'>
        <span className='photographer'>{wallpaper.photographer}</span>
        <form onSubmit={handleSubmitWallpaper}>
          <input className='save' type='submit' value='Set'/>
        </form>
      </span>
    </div>
  )
}

export default DisplayMyPhotos;
