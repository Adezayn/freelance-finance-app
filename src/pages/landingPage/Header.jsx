import React from "react";
import { NavLink } from "react-router-dom";
import arrowRight from "../../assets/arrow-right.svg";
import headerPhone from "../../assets/header-phone.svg";
import Button from "../../components/Button";
import "../../compiled/header.css";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="header">
      {/* <!-- NAVBAR --> */}
      <Navbar />
      <div className="header_container">
        {/* <!-- HEADER MAIN --> */}
        <section className="header_container__section">
          <div className="header_container__section__one">
            <h1>Smart banking for freelancers</h1>
            <p>
              Draft is a revolutionary mobile app built to help you manage your
              business easily and save you money.
            </p>
            <NavLink to="/signup" className="no-display">
              <Button color="blue" optionalStyle="style">
                Register Now
                <img src={arrowRight} alt="arrow-right" />
              </Button>
            </NavLink>
          </div>
          <div className="header_container__section__two">
            <img src={headerPhone} alt="phone" />
          </div>
        </section>
      </div>
    </header>
  );
};

export default Header;
