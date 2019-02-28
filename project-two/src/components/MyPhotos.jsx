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
            handleClickCollection={handleClickCollection}
            handleSubmitWallpaper={handleSubmitWallpaper} />
        </div>
      ))}
    </div>
  )
}
export default MyPhotos;
