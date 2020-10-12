import React from "react";
import s from "./EmployeeProfile.module.css";
import myPhoto from "../../assets/img/I.jpg";


const EmployeeProfile = ({ empProfile }) => {
  return (
    <div className={s.empForm}>
      <div className={s.title}>Profile</div>
      <div className={s.container}>
        <div className={s.proImg}>
          <img src={myPhoto} alt="profilePhoto" />
        </div>
        <div className={s.proInfo}>
          <div className={s.fullName}>
            {empProfile.FirstName} {empProfile.Surname}
          </div>
          <div className={s.profession}>Web-developer</div>
          <div className={s.about}>
            <div className={s.var}>
              <div>Username</div>
              <div>Email</div>
              <div>Contact</div>
            </div>
            <div className={s.val}>
              <div>{empProfile.Username}</div>
              <div>{empProfile.Mail}</div>
              <div>{empProfile.ContactNumber}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;
