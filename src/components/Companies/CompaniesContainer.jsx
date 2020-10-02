import React from "react";
import { connect } from "react-redux";
import Companies from "./Companies";

const mapStateToProps = (state) => {
  return {
    companies: state.comoaniesPage.companies,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
const CompaniesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Companies);

export default CompaniesContainer;
