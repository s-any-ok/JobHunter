import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import { setEmployees } from "../../redux/employeesReducer";
import Employees from "./Employees";

class EmployeesContainer extends React.Component {
  componentDidMount() {
    if (this.props.employees.length === 0) {
      axios.get("https://localhost:44374/api/Employee").then((response) => {
        this.props.setEmployees(response.data);
      });
    }
  }

  render() {
    return <Employees employees={this.props.employees} />;
  }
}

const mapStateToProps = (state) => {
  return {
    employees: state.employeesPage.employees,
  };
};
const mapDispatchToProps = {
  setEmployees,
};
export default connect(mapStateToProps, mapDispatchToProps)(EmployeesContainer);
