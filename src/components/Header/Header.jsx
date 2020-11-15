import React, { useState } from "react";
import s from "./Header.module.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBar from "./Nav/NavBar";
import LoginContainer from "../Login/LoginContainer";
import userIcon from "../../assets/img/user.png";
import companyIcon from "../../assets/img/authCompany.png";

const Header = ({ UserLogin, isAuth, IsCompany }) => {
  const isComp = IsCompany === "1";
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
          {isAuth && !isComp && (
            <Link to={`/empProfile/`}>
              <img className={s.userIcon} src={userIcon} alt={UserLogin} />
            </Link>
          )}
          {isAuth && isComp && (
            <Link to={`/cmpProfile/`}>
              <img
                className={s.companyIcon}
                src={companyIcon}
                alt={UserLogin}
              />
            </Link>
          )}
          <LoginContainer show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      </div>
    </div>
  );
};

export default Header;
