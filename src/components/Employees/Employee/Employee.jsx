import React from "react";
import s from "./Employee.module.css";
import myPhoto from "../../../assets/img/emp.png";
import { NavLink } from "react-router-dom";

const Employee = (props) => {
  return (
    <div key={props.employee.EmployeeID}>
      <div className={s.container}>
        <div className={s.vacancyInfo}>
          <div>
            <NavLink to={"/empProfile/" + props.employee.EmployeeID}>
              <img
                className={s.vacancyImg}
                src={myPhoto}
                alt={props.employee.EmployeeID}
              />
            </NavLink>
          </div>
          <div className={s.vacancyInfoText}>
            <div className={s.fio}>
              {props.employee.FirstName} {props.employee.LastName}
            </div>
            <div className={s.gender}>{props.employee.Gender}</div>
            <div className={s.education}>{props.employee.Education}</div>
            <div className={s.contact}>{props.employee.Objective}</div>
            <div className={s.contact}>{props.employee.BirthDay}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
