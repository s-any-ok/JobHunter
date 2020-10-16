import React from "react";
import s from "./EmployeeProfile.module.css";
import myPhoto from "../../assets/img/I.jpg";

const EmployeeProfile = (props) => {
  debugger;
  return (
    <div className={s.empForm}>
      <div className={s.title}>Profile</div>
      <div className={s.container}>
        <div className={s.proImg}>
          <img src={myPhoto} alt="profilePhoto" />
        </div>
        <div className={s.proInfo}>
          <div className={s.fullName}>
            {props.profile.FirstName} {props.profile.LastName}
          </div>
          <div className={s.profession}>{props.profile.Objective}</div>
          <div className={s.about}>
            <div className={s.var}>
              <div>Education</div>
              <div>Additional Education</div>
              <div>Skills</div>
              <div>Adress</div>
            </div>
            <div className={s.val}>
              <div>{props.profile.Education}</div>
              <div>{props.profile.AdditionalEducation}</div>
              <div>{props.profile.Skills}</div>
              <div>{props.profile.Adress}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;
