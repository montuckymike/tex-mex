import React from "react";
import {Link} from "react-router-dom";

const NavBar = () => {
  return(
    <div className="navbar">
      <ul className="navlinks ">
        <li> <Link className="Link" to="/"> Home </Link> </li>
        <li> <Link className="Link" to="/AboutUs"> About Us </Link> </li>
        <li> <Link className="Link" to="/"> ClassApp </Link> </li>
      </ul>
    </div>
)}


export default NavBar
