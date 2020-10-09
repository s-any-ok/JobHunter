import React from "react";
import { connect } from "react-redux";
import { setEmployeeUsers } from "../../redux/employeesReducer";
import EmployeeRegister from "./EmployeeRegister";

class EmployeeRegisterContainer extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.setEmployeeUsers(e.target);
  }
  render() {
    return <EmployeeRegister handleSubmit={this.handleSubmit.bind(this)} />;
  }
}

export default connect(null, { setEmployeeUsers })(EmployeeRegisterContainer);
