import React from 'react';

const DisplayRandom = (props) => {

  const { wallpaper, handleSubmitRandom } = props;

  return (
    <div className='wrapper'>
      <img
        src={wallpaper.src.large}
        alt={`Number ${wallpaper.id}`}
        id={wallpaper.id}
      />
      <span className='info'>
        <span className='photographer'>{wallpaper.photographer}</span>
        <form onSubmit={handleSubmitRandom}>
          <input className='save' type='submit' value='Save' />
        </form>
      </span>
    </div>
  )
}
export default DisplayRandom;
