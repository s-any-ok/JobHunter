import React from "react";
import { connect } from "react-redux";
import { setCompanies } from "../../redux/companiesReducer";
import Companies from "./Companies";

const mapStateToProps = (state) => {
  return {
    companies: state.comoaniesPage.companies,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setCompanies: (companies) => {
      dispatch(setCompanies(companies));
    },
  };
};
const CompaniesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Companies);

export default CompaniesContainer;
