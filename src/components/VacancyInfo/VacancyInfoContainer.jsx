import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { getVacInfo, setRespond } from "../../redux/vacInfoReducer";
import VacancyInfo from "./VacancyInfo";

class VacancyInfoContainer extends React.Component {
  refreshProfile() {
    let pid = this.props.match.params.id;
    if (!pid) {
      pid = this.props.history.push("/");
    }
    this.props.getVacInfo(pid);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id)
      this.refreshProfile();
  }

  render() {
    return <VacancyInfo {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    vacancy: state.vacInfoPage.vacancy,
    company: state.vacInfoPage.company,
    isAuth: state.auth.isAuth,
    childID: state.auth.ChildID,
    isCompany: state.auth.IsCompany,
  };
};
const mapDispatchToProps = {
  getVacInfo,
  setRespond,
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(VacancyInfoContainer);
