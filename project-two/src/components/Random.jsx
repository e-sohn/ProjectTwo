import React from 'react';
import DisplayRandom from './DisplayRandom';

const Random = (props) => {
  const { handleSubmitRandom, random } = props;

  return (
    <div className='random'>
      {random !== undefined &&
        <div>
          <DisplayRandom
            wallpaper={random[0]}
            handleSubmitRandom={handleSubmitRandom} />
        </div>
      }
    </div>
  )
}
export default Random;
