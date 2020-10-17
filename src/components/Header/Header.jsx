import React, { useState } from "react";
import s from "./Header.module.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "./Nav/NavBar";
import LoginContainer from "../Login/LoginContainer";
import userIcon from "../../assets/img/authUser.png";

const Header = ({ UserLogin, isAuth, UserId }) => {
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
          {!isAuth && (
            <Button
              className={s.loginText}
              variant="light"
              onClick={() => setModalShow(true)}
            >
              Login
            </Button>
          )}
          {isAuth && (
            <div key={UserId}>
              <Link to={`/empProfile/`}>
                <img className={s.userIcon} src={userIcon} alt={UserLogin} />
              </Link>
            </div>
          )}

          <LoginContainer show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      </div>
    </div>
  );
};

export default Header;
