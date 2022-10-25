import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Header.css";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <NavLink to="/home">
            <li>HOME</li>
          </NavLink>
          <NavLink to="/about">
            <li>ABOUT</li>
          </NavLink>
          <NavLink to="/projects">
            <li>PROJECTS</li>
          </NavLink>
          <NavLink to="/contact">
            <li>CONTACT</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
