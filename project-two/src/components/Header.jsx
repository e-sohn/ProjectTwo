import React from 'react';
import Navigation from './Navigation';

const Header = (props) => {
  return (
    <div className='header'>
      <div className='title'>
        <h4>Facet</h4>
        <h4>Eric Sohn</h4>
      </div>
      <Navigation />
    </div>
  )
}
export default Header;
