import React from 'react';
import Form from './Form';
import Display from './Display';

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
            <div key={wallpaper.id}>
              <Display wallpaper={wallpaper} />
            </div>
          ))}
        </div>
      }
    </div>
  )
}
export default ChoosePhotos;
