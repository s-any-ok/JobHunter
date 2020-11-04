import React from "react";
import { connect } from "react-redux";
import { getIsFetching, getEmployees } from "../../redux/empSelectors";
import Preloader from "../common/Preloader/Preloader";
import Employee from "./Employee/Employee";
import s from "./Employees.module.css";

class EmployeesContainer extends React.Component {
  render() {
    return (
      <Employees
        employees={this.props.employees}
        isFetching={this.props.isFetching}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    employees: getEmployees(state),
    isFetching: getIsFetching(state),
  };
};

//-----------------------------------------------//
const Employees = ({ employees, isFetching }) => {
  return (
    <div className={s.container}>
      <div className={s.title}>Employees</div>

      {isFetching ? <Preloader /> : null}
      <div>
        {employees.map((e) => (
          <Employee employee={e} />
        ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, null)(EmployeesContainer);
