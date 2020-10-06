import React from "react";
import { connect } from "react-redux";
import { getEmpProfile } from "../../redux/empProfileReducer";
import EmployeeProfile from "./EmployeeProfile";

class EmployeeProfileContainer extends React.Component {
  render() {
    return <EmployeeProfile empProfile={this.props.empProfile} />;
  }
}
const mapStateToProps = (state) => {
  return {
    empProfile: state.empProfilePage.profile,
  };
};
const mapDispatchToProps = {
  getEmpProfile,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeProfileContainer);
