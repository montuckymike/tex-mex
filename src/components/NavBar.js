import React from "react";
import {Link} from "react-router-dom";

const NavBar = () => {
  return(
    <div className="navbar">
      <ul className="navlinks ">
        <li> <Link to="/"> Home </Link> </li>
        <li> <Link to="/Menu"> Menu </Link> </li>
        <li> <Link to="/AboutUs"> About Us </Link> </li>
      </ul>
    </div>
)}


export default NavBar
