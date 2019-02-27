import React from 'react';
import Display from './Display';

const Random = (props) => {
  const { handleSubmitRandom, random } = props;

  return (
    <div className='random'>
      {random !== undefined &&
        <div>
          <Display wall={random[0]}/>
          <form onSubmit={handleSubmitRandom}>
            <input type='submit' value='Add to my collection' />
          </form>
        </div>
      }
    </div>
  )
}
export default Random;
