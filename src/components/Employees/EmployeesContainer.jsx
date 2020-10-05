import React from "react";
import { connect } from "react-redux";
import { employeeAPI } from "../../api/api";
import { setEmployees, toggleIsFetching } from "../../redux/employeesReducer";
import Employees from "./Employees";

class EmployeesContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    if (this.props.employees.length === 0) {
      employeeAPI.getEmployees().then((data) => this.props.setEmployees(data));
    }
    this.props.toggleIsFetching(false);
  }

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
const mapDispatchToProps = {
  setEmployees,
  toggleIsFetching,
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesContainer);
