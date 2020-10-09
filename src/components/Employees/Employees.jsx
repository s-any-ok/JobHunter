import React from "react";
import Preloader from "../common/Preloader/Preloader";
import Employee from "./Employee/Employee";
import s from "./Employees.module.css";

const Employees = ({ employees, isFetching }) => {
  return (
    <>
      <div className={s.title}>Employees</div>
      {isFetching ? <Preloader /> : null}
      <div>
        {employees.map((e) => (
          <Employee employee={e} />
        ))}
      </div>
    </>
  );
};

export default Employees;
