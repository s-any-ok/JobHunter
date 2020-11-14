import React from "react";
import { connect } from "react-redux";
import { setCompanyUsers } from "../../redux/cmpReducer";
import CompanyRegister from "./CompanyRegister";

class CompanyRegisterContainer extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.setCompanyUsers(e.target);
  };
  render() {
    return <CompanyRegister handleSubmit={this.handleSubmit} />;
  }
}

export default connect(null, { setCompanyUsers })(CompanyRegisterContainer);
