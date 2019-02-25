import React from 'react';
import Form from './Form';

const ChoosePhotos = (props) => {

  const { wallpapers, input, handleChange, handleSubmit } = props;
  
  return (
    <div className='choose-photos'>
      <Form
        wallpapers={wallpapers}
        input={input}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {props.wallpapers.photos !== undefined &&
        <div>
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
