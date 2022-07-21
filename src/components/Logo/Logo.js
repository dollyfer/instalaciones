import React from "react";
import logo from "../../Images/nailswithdo.png";
import "./Logo.css";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img className="imgLogo" src={logo} alt= "imagenDeLogo"></img>
    </Link>
  );
};

export default Logo;
