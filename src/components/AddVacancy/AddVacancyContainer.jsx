import React, { Component } from "react";
import { connect } from "react-redux";
import { setCompanyVacancy } from "../../redux/vacReducer";
import AddVacancy from "./AddVacancy";

class AddVacancyContainer extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.setCompanyVacancy(e.target, this.props.ChildID);
  };
  render() {
    return <AddVacancy handleSubmit={this.handleSubmit} {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    ChildID: state.auth.ChildID,
  };
};

export default connect(mapStateToProps, { setCompanyVacancy })(
  AddVacancyContainer
);
