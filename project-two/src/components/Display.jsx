import React from 'react';

const Display = (props) => {

  const { wallpaper, handleClick } = props;

  return (
    <div>
       <div>
        <img
          src={wallpaper.src.medium}
          onClick={handleClick}
          id={wallpaper.id}
        />
        <div>Photo taken by {wallpaper.photographer}</div>
      </div>
    </div>
  )
}
export default Display;
