import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="dropdown">
      <button className="dropbtn">More</button>
      <div className="dropdown-content">
        <Link to='/'>Home</Link>
        <Link to='/myphotos'>Personal</Link>
        <Link to='/choosephotos'>Search</Link>
        <Link to='/random'>Random</Link>
      </div>
    </nav>
  )
}
export default Navigation;
