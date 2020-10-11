import React from "react";
import { connect } from "react-redux";
import { getIsFetching, getEmployees } from "../../redux/employeesSelectors";
import Employees from "./Employees";

class EmployeesContainer extends React.Component {
  render() {
    console.log('emp');
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

export default connect(mapStateToProps, null)(EmployeesContainer);
