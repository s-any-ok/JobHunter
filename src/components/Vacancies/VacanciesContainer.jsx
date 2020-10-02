import React from "react";
import { connect } from "react-redux";
import VacanciesFunc from "./VacanciesFunc";
// import * as axios from 'axios';

const mapStateToProps = (state) => {
  return {
    vacancies: state.vacanciesPage.vacancies,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
const VacanciesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(VacanciesFunc);

export default VacanciesContainer;
