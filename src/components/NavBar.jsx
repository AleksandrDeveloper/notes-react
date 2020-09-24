import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary ">
      <div className="navbar-brand">Notes app</div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to='/' exact className="nav-link" activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/about' className="nav-link" activeClassName='active'>
            About
          </NavLink>
        </li> 
      </ul>
    </nav>
  );
}
