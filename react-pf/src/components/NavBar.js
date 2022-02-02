import React from 'react';
import { Link } from "react-router-dom";
import '../styles/NavBar.css';
import Logo from "../assets/Logo_LSC.png";

function NavBar() {
  return (
    <div className="NavBar">
      <img src={Logo} alt="" />

      <div className="Menu">
        <Link to="/" className="links normal_text"> Home</Link>
        <Link to="/aboutMe" className="links normal_text">About Me</Link>
        <Link to="/projects" className="links normal_text">Projects</Link>
      </div>

    </div>
  )
}

export default NavBar;
