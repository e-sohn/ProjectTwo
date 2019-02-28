import React from 'react';
import Navigation from './Navigation';
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className='header'>
      <Link to='./'>Facet</Link>
      <Navigation />
    </div>
  )
}
export default Header;
