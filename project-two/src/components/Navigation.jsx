import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/myphotos'>My Photos</Link>
      <Link to='/choosephotos'>Choose Photos</Link>
      <Link to='/random'>Random Photo</Link>
    </nav>
  )
}
export default Navigation;
