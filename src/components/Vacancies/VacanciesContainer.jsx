import React from "react";
import { connect } from "react-redux";
import { setVacancies } from "../../redux/vacanciesReducer";
import Vacancies from "./Vacancies";

const mapStateToProps = (state) => {
  return {
    vacancies: state.vacanciesPage.vacancies,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setVacancies: (vacancies) => {
      dispatch(setVacancies(vacancies));
    },
  };
};
const VacanciesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Vacancies);

export default VacanciesContainer;
