import React from "react";
import Employee from "./Employee/Employee";
import s from "./Employees.module.css";

const Employees = ({ employees }) => {
  return (
    <div>
      <div className={s.title}>Employees</div>
      {employees.map((e) => (
        <Employee employee={e} />
      ))}
    </div>
  );
};

export default Employees;
