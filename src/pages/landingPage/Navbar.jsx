import React, {useState} from "react";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import Button from "../../components/Button";
import logo from "../../assets/logo.svg";
import "../../compiled/header.css";

const Navbar = ({ optionalStyle }) => {
  const [showLinks, setShowLinks] = useState(false);
  const url = window.location.href;

   const toggleLinks = () => {
     setShowLinks(!showLinks);
   };

   const closeLinks = () => {
     setShowLinks(false);
   };

  return (
    <nav className={`header_container__nav ${optionalStyle && "optional_nav"}`}>
      <div className="header_container__nav__container">
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <ul className="header_container__nav__ul no-display">
          <li>Home</li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
        </ul>
        {/* <NavLink to="/signup"> */}
        <NavLink to="/signup" className="no-display">
          <Button color="pink">Sign up</Button>
        </NavLink>
        {/* <p>{url}</p> */}
        {/* <NavLink to="/login"> */}
        <NavLink to="/login">
        <Button
          color={
            url === "http://localhost:3000/"
              ? "nudeborderwhite"
              : "nudeborderpink"
          }
        >
          Login
        </Button>
      </NavLink>
        <button className="nav-toggle" onClick={toggleLinks}>
          <FaBars />
        </button>
      </div>

      {showLinks && (
        <div className="nav-menu" onClick={closeLinks}>
          <button className="close-icon">
            <IoClose />
          </button>
          <div>
            <ul className="">
              <li>Home</li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
            </ul>
            <NavLink to="/" className="nav-menu-btn">
              <Button color="pink">Sign up</Button>
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
