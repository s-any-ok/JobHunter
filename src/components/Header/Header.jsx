import React, { useState } from "react";
import s from "./Header.module.css";
import { Button } from "react-bootstrap";
import NavBar from "./Nav/NavBar";
import LoginContainer from "../Login/LoginContainer";


const Header = ({UserLogin, isAuth, getLogoutUser}) => {
  const [modalShow, setModalShow] = useState(false);
  const logoutAction = () => {
    setModalShow(false)
    getLogoutUser()
  }
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
          {isAuth && <div>{UserLogin} - <button onClick={logoutAction}>Logout</button></div>}

          <LoginContainer show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      </div>
    </div>
  );
};

export default Header;
