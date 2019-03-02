import React from 'react';
import DisplayMyPhotos from './DisplayMyPhotos';

const MyPhotos = (props) => {
  const { collection,
    handleClickWallpaper } = props;

  return (
    <div className='all-photos'>
      {Object.values(collection).map(wallpaper => (
        <div key={wallpaper.id}>
          <DisplayMyPhotos
            wallpaper={wallpaper}
            handleClickWallpaper={handleClickWallpaper} />
        </div>
      ))}
    </div>
  )
}
export default MyPhotos;
