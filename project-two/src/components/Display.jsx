import React from 'react';

const Display = (props) => {

  const { wallpaper, handleSubmitPic } = props;

  return (
    <div className='wrapper'>
      <img
        src={wallpaper.src.medium}
        id={wallpaper.id}
        alt={`Number ${wallpaper.id}`}
        className='images' />
      <span className='info'>
        <span className='photographer'>{wallpaper.photographer}</span>
        <form id={wallpaper.id} onSubmit={handleSubmitPic}>
          <input className='save' type='submit' value='Save'/>
        </form>
      </span>
    </div>
  )
}
export default Display;
