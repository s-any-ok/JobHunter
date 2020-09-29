import React, { useState } from "react";
import s from "./HeaderNav.module.css";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import Login from "../Login/Login";

const HeaderNav = () => {
  const [modalShow, setModalShow] = useState(false);
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
        <div className={s.login}>
          <Button
            className={s.loginText}
            variant="light"
            onClick={() => setModalShow(true)}
          >
            Login
          </Button>

          <Login show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
