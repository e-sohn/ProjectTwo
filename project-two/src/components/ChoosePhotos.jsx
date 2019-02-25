import React from 'react';
import Form from './Form';

const ChoosePhotos = (props) => {
  return (
    <div className='choose-photos'>
      {props.wallpapers.photos !== undefined &&
        <div>
          <Form />
          {props.wallpapers.photos.map(wallpaper => (
            <div>
              <img
                src={wallpaper.src.medium}
                alt='Picture from Pixel'
                />
              <div>Photo taken by {wallpaper.photographer}</div>
            </div>
          ))}
        </div>
      }
    </div>
  )
}
export default ChoosePhotos;
