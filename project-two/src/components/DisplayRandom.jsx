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
        <div onClick={handleSubmitRandom}
          className='save'><i className="far fa-heart"></i></div>
      </span>
    </div>
  )
}
export default DisplayRandom;
