import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { getEmpProfile } from "../../redux/empProfileReducer";
import EmployeeProfile from "./EmployeeProfile";

class EmployeeProfileContainer extends React.Component {
  componentDidMount() {
    let pid = this.props.match.params.id;
    this.props.getEmpProfile(pid);
  }
  render() {
    return <EmployeeProfile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.empProfilePage.profile,
    isAuth: state.auth.isAuth,
  };
};
const mapDispatchToProps = {
  getEmpProfile,
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(EmployeeProfileContainer);
