import React, { useState } from "react";
import s from "./Header.module.css";
import { Button } from "react-bootstrap";
import Login from "../Login/Login";
import NavBar from "./Nav/NavBar";

const Header = ({UserLogin, isAuth}) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className={s.header}>
      <div className={s.container}>
        <div className={s.logo}>
          <big>JH</big>
        </div>
        <div>
          <NavBar />
        </div>
        <div className={s.login}>
          {!isAuth && <Button
            className={s.loginText}
            variant="light"
            onClick={() => setModalShow(true)}
          >
            Login
          </Button>}
          {isAuth && <div>{UserLogin}</div>}

          <Login show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      </div>
    </div>
  );
};

export default Header;
