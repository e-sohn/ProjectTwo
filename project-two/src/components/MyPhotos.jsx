import React from 'react';
import DisplayMyPhotos from './DisplayMyPhotos';

const MyPhotos = (props) => {
  const { collection,
    handleSubmitWallpaper,
    handleClickCollection } = props;

  return (
    <div>
      {Object.values(collection).map(wallpaper => (
        <div key={wallpaper.id}>
          <DisplayMyPhotos
            wallpaper={wallpaper}
            handleClickCollection={handleClickCollection} />
        </div>
      ))}
      {Object.keys(collection).length > 0 &&
        <form onSubmit={handleSubmitWallpaper}>
          <input type='submit' value='Make Wallpaper'/>
        </form>
      }
    </div>
  )
}
export default MyPhotos;
