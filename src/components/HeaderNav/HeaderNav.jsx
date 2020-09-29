import React from "react";
import s from "./HeaderNav.module.css";
import { NavLink } from "react-router-dom";

const HeaderNav = () => {
  return (
    <div className={s.header}>
      <div className={s.container}>
        <div className={s.logo}>
          <big>JH</big>
        </div>
        <div>
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
            <NavLink to="/news" activeClassName={s.active}>
              News
            </NavLink>
            <NavLink to="/about" activeClassName={s.active}>
              About
            </NavLink>
          </div>
        </div>
        <div>
          <NavLink to="/login">
            <div className={s.login}>Login</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
