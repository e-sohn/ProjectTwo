import React from 'react';
import Display from './Display';

const Random = (props) => {
  return (
    <div className='random'>
      {props.random !== undefined &&
        <div>
          <Display wall={props.random[0]}/>
        </div>
      }
    </div>
  )
}
export default Random;
