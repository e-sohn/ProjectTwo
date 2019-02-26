import React from 'react';
import Display from './Display';

const MyPhotos = (props) => {
  const { collection, handleClick, handleSubmitWallpaper } = props;

  return (
    <div>
      {Object.values(collection).map(wallpaper => (
        <div key={wallpaper.id}>
          <Display
            wallpaper={wallpaper}
            handleClick={handleClick} />
        </div>
      ))}
      <form onSubmit={handleSubmitWallpaper}>
        <input type='submit' value='Make Wallpaper'/>
      </form>
    </div>
  )
}
export default MyPhotos;
