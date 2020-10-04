import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import { setEmployees, toggleIsFetching } from "../../redux/employeesReducer";
import Employees from "./Employees";

class EmployeesContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    if (this.props.employees.length === 0) {
      axios.get("https://localhost:44374/api/Employee").then((response) => {
        this.props.setEmployees(response.data);
      });
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
