import React from 'react';

const Display = (props) => {

  const { wall, wallpaper, handleClick } = props;

  return (
    <div>
      {wallpaper === undefined ?
        <div>
          <img
            src={wall.src.landscape}
            alt='Picture from Pixel'
            id={wall.id}
          />
          <div>Photo taken by {wall.photographer}</div>
        </div> : <div>
          <img
            src={wallpaper.src.medium}
            onClick={handleClick}
            id={wallpaper.id}
          />
          <div>Photo taken by {wallpaper.photographer}</div>
        </div>
      }
    </div>
  )
}
export default Display;
