import React from "react";
import { setEmployeeUsers } from "../../redux/employeesReducer";
import EmployeeRegister from "./EmployeeRegister";

class EmployeeRegisterContainer extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    setEmployeeUsers(e.target);
  }
  render() {
    return <EmployeeRegister handleSubmit={this.handleSubmit} />;
  }
}

export default EmployeeRegisterContainer;
