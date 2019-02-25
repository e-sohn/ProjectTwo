import React from 'react';
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className='header'>
      <div className='title'>
        <h4>Facet</h4>
        <h4>Eric Sohn</h4>
      </div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/myphotos'>My Photos</Link>
        <Link to='/choosephotos'>Choose Photos</Link>
        <Link to='/random'>Random Photo</Link>
      </nav>
    </div>
  )
}
export default Header;
