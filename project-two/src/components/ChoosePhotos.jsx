import React from 'react';
import Form from './Form';
import Display from './Display';

const ChoosePhotos = (props) => {

  const { wallpapers, input, handleChange, handleSubmit, handleClick, handleSubmitPic } = props;

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
              <Display
                wallpaper={wallpaper}
                handleClick={handleClick} />
            </div>
          ))}
          <form onSubmit={handleSubmitPic}>
            <input type='submit' value='Add to my collection'/>
          </form>
        </div>
      }
    </div>
  )
}
export default ChoosePhotos;
