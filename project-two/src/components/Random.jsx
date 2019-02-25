import React from 'react';

const Random = (props) => {
  return (
    <div className='random'>
      {props.random.photos !== undefined &&
        <div>
          <img
            src={props.random.photos[0].src.landscape}
            alt='Picture from Pixel'
            />
          <div>Photo taken by {props.random.photos[0].photographer}</div>
        </div>
      }
    </div>
  )
}
export default Random;
