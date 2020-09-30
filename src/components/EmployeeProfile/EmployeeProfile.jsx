import React from "react";
import s from "./EmployeeProfile.module.css";
import myPhoto from "../../assets/img/I.jpg";
// import * as axios from 'axios';

const EmployeeProfile = () => {
  return (
    <div className={s.empForm}>
      <div className={s.title}>Profile</div>
      <div className={s.container}>
        <div className={s.proImg}>
          <img src={myPhoto} alt="profilePhoto" />
        </div>
        <div className={s.proInfo}>
          <div className={s.fullName}>Oleksandr Levak</div>
          <div className={s.profession}>Web-developer</div>
          <div className={s.about}>
            <div className={s.var}>
              <div>Username</div>
              <div>Email</div>
            </div>
            <div className={s.val}>
              <div>Alex</div>
              <div>alex@mail.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;
