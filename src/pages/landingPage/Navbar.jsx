import React, {useState} from "react";
import { FaBars } from "react-icons/fa";
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

  return (
    <nav className={`header_container__nav ${optionalStyle && "optional_nav"}`}>
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      <div className="flex">
        <ul className="header_container__nav__ul">
          <li>Home</li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
        </ul>
        {/* <NavLink to="/signup"> */}
        <NavLink to="/">
          <Button color="pink">Sign up</Button>
        </NavLink>
        {/* <p>{url}</p> */}
        {/* <NavLink to="/login"> */}
        {/* <NavLink to="/">
        <Button
          color={
            url === "http://localhost:3000/"
              ? "nudeborderwhite"
              : "nudeborderpink"
          }
        >
          Login
        </Button>
      </NavLink> */}
      </div>
      <button className="nav-toggle" onClick={toggleLinks}>
        <FaBars />
      </button>

      {showLinks && (
        <div className="nav-menu">
          <ul className="">
            <li>Home</li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
          </ul>
          {/* <NavLink to="/signup"> */}
          <NavLink to="/">
            <Button color="pink">Sign up</Button>
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
