import React from "react";
import s from "./EmployeeProfile.module.css";
import myPhoto from "../../assets/img/emp.png";
import { Button } from "react-bootstrap";

const EmployeeProfile = ({ profile, isAuth, ChildID, getLogoutUser }) => {
  const isCorrectUser = isAuth && profile.EmployeeID === ChildID;
  return (
    <div className={s.mainContainer}>
      <div className={s.empForm}>
        <div className={s.title}>Profile</div>
        <div className={s.container}>
          <div className={s.proImg}>
            <img src={myPhoto} alt="profilePhoto" />
          </div>
          <div className={s.proInfo}>
            <div className={s.fullName}>
              {profile.FirstName} {profile.LastName}
            </div>
            <div className={s.profession}>{profile.Objective}</div>
            <div className={s.about}>
              <div className={s.var}>
                <div>Education</div>
                <div>Additional Education</div>
                <div>Skills</div>
                <div>Adress</div>
              </div>
              <div className={s.val}>
                <div>{profile.Education}</div>
                <div>{profile.AdditionalEducation}</div>
                <div>{profile.Skills}</div>
                <div>{profile.Adress}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isCorrectUser && (
        <Button className={s.logout} onClick={getLogoutUser} variant="dark">
          Logout
        </Button>
      )}
    </div>
  );
};

export default EmployeeProfile;
