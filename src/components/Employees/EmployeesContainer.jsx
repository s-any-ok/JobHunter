import React from "react";
import { connect } from "react-redux";
import Employees from "./Employees";

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
    employees: state.employeesPage.employees,
    isFetching: state.employeesPage.isFetching,
  };
};

export default connect(mapStateToProps, null)(EmployeesContainer);
