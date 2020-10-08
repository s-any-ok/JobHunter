import React from "react";
import s from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={s.navbar}>
      <NavLink to="/vacancies" activeClassName={s.active}>
        Vacancies
      </NavLink>
      <NavLink to="/companies" activeClassName={s.active}>
        Companies
      </NavLink>
      <NavLink to="/employees" activeClassName={s.active}>
        Employees
      </NavLink>
      <NavLink to="/about" activeClassName={s.active}>
        About
      </NavLink>
    </div>
  );
};

export default NavBar;
