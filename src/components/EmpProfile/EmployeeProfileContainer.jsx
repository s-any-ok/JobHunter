import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { getLogoutUser } from "../../redux/authReducer";
import { getEmpProfile } from "../../redux/empProfReducer";
import EmployeeProfile from "./EmployeeProfile";

class EmployeeProfileContainer extends React.Component {
  componentDidMount() {
    let pid = this.props.match.params.id;
    if (!pid) {
      pid = this.props.ChildID;
      if (!pid) pid = this.props.history.push("/");
    }
    this.props.getEmpProfile(pid);
  }

  componentDidUpdate() {
    this.componentDidMount();
  }

  render() {
    return <EmployeeProfile {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.empProfilePage.profile,
    isAuth: state.auth.isAuth,
    ChildID: state.auth.ChildID,
  };
};
const mapDispatchToProps = {
  getEmpProfile,
  getLogoutUser,
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(EmployeeProfileContainer);
