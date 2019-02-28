import React from 'react';
import Form from './Form';
import Display from './Display';

const ChoosePhotos = (props) => {

  const { wallpapers, input, handleChange, handleSubmit, handleSubmitPic } = props;

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
            <section key={wallpaper.id}>
              <Display
                wallpaper={wallpaper}
                handleSubmitPic={handleSubmitPic} />
            </section>
          ))}
        </div>
      }
    </div>
  )
}
export default ChoosePhotos;
