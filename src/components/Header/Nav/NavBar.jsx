import React from "react";
import s from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={s.navbar}>
      <NavLink to="/vacancies" className={s.navBtn} activeClassName={s.active}>
        Vacancies
      </NavLink>
      <NavLink to="/companies" className={s.navBtn} activeClassName={s.active}>
        Companies
      </NavLink>
      <NavLink to="/employees" className={s.navBtn} activeClassName={s.active}>
        Employees
      </NavLink>
      <NavLink to="/about" className={s.navBtn} activeClassName={s.active}>
        About
      </NavLink>
    </div>
  );
};

export default NavBar;
