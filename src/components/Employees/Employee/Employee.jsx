import React from "react";
import s from "./Employee.module.css";
import myPhoto from "../../../assets/img/emp.png";

const Employee = (props) => {
  return (
    <div>
      <div className={s.container}>
        <div className={s.vacancyInfo}>
          <div>
            <img className={s.vacancyImg} src={myPhoto} />
          </div>
          <div className={s.vacancyInfoText}>
            <div className={s.vacancyTitile}>{props.employee.FirstName}</div>
            <div className={s.company}>{props.employee.Surname}</div>
            <div className={s.vacancyDescription}>
              {props.employee.Education}
            </div>
            <div className={s.salary}>{props.employee.Birthday}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
