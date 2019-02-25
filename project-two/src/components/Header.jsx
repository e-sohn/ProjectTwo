import React from 'react';
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div>
      <h1>Eric Sohn</h1>
      <nav>
        <Link to='/myphotos'>My Photos</Link>
        <Link to='/choosephotos'>Choose Photos</Link>
        <Link to='/random'>Random Photo</Link>
      </nav>
    </div>
  )
}
export default Header;
