import React from 'react';
import DisplayRandom from './DisplayRandom';

const Random = (props) => {
  const { handleClickRandom,
    random } = props;

  return (
    <div className='random'>
      {random !== undefined &&
        <div>
          <DisplayRandom
            wallpaper={random[0]}
            handleClickRandom={handleClickRandom} />
        </div>
      }
    </div>
  )
}
export default Random;
