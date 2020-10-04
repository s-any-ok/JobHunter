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
            <div className={s.fio}>
              {props.employee.FirstName} {props.employee.Surname}
            </div>
            <div className={s.gender}>{props.employee.Gender}</div>
            <div className={s.education}>{props.employee.Education}</div>
            <div className={s.contact}>{props.employee.Mail}</div>
            <div className={s.contact}>{props.employee.ContactNumber}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
