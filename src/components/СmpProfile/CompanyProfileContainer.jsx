import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { getLogoutUser } from "../../redux/authReducer";
import { getCmpProfile, getCmpVacancies } from "../../redux/cmpProfReducer";
import CompanyProfile from "./CompanyProfile";

class CompanyProfileContainer extends React.Component {
  refreshProfile() {
    let pid = this.props.match.params.id;
    if (!pid) {
      if (this.props.IsCompany !== "0") pid = this.props.ChildID;
      if (!pid) pid = this.props.history.push("/");
    }
    this.props.getCmpProfile(pid);
    this.props.getCmpVacancies(pid);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id)
      this.refreshProfile();
  }

  render() {
    return <CompanyProfile {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.cmpProfilePage.profile,
    vacancies: state.cmpProfilePage.vacancies,
    isAuth: state.auth.isAuth,
    IsCompany: state.auth.IsCompany,
    ChildID: state.auth.ChildID,
  };
};
const mapDispatchToProps = {
  getCmpProfile,
  getCmpVacancies,
  getLogoutUser,
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(CompanyProfileContainer);
