import React from "react";
// import axios from "axios";

import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const NavigationComponent = () => {
  return (
    <div className="navbar">
      <h1>My Photography Company</h1>

      <div className="nav-wrapper">
        <div className="nav-link-wrapper">
          <NavLink exact to="/" activeClassName="nav-link-active">
            Home
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/about-me" activeClassName="nav-link-active">
            About
          </NavLink>
        </div>

        <div className="nav-link-wrapper">
          <NavLink to="/contact" activeClassName="nav-link-active">
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default withRouter(NavigationComponent);
