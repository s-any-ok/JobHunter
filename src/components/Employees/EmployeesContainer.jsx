import React from "react";
import { connect } from "react-redux";
import { getEmployees } from "../../redux/employeesReducer";
import Employees from "./Employees";

class EmployeesContainer extends React.Component {
  componentDidMount() {
    this.props.getEmployees(this.props.employees);
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
  getEmployees,
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesContainer);
