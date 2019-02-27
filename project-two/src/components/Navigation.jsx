import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav class="dropdown">
      <button class="dropbtn">More</button>
      <div class="dropdown-content">
        <Link to='/'>Home</Link>
        <Link to='/myphotos'>Mine</Link>
        <Link to='/choosephotos'>Search</Link>
        <Link to='/random'>Random</Link>
      </div>
    </nav>
  )
}
export default Navigation;
