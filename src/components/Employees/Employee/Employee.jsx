import React from "react";
import s from "./Employee.module.css";
import myPhoto from "../../../assets/img/emp.png";
import { NavLink } from "react-router-dom";

const Employee = ({ employee }) => {
  return (
    <div className={s.container}>
      <div className={s.empInfo}>
        <div>
          <NavLink to={"/empProfile/" + employee.EmployeeID}>
            <img className={s.empImg} src={myPhoto} alt={employee.EmployeeID} />
          </NavLink>
        </div>
        <div className={s.empInfoText}>
          <div className={s.fio}>
            {employee.FirstName} {employee.LastName}
          </div>
          <div className={s.gender}><b>Стать:</b> {employee.Gender}</div>
          <div className={s.education}><b>Освіта:</b> {employee.Education}</div>
          <div className={s.contact}><b>Професія:</b> {employee.Objective}</div>
          <div className={s.contact}><b>Дата народження:</b> {employee.BirthDay}</div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
