import React from "react";
import { connect } from "react-redux";
import Vacancies from "./Vacancies";
class VacanciesContainer extends React.Component {
  render() {
    return <Vacancies vacancies={this.props.vacancies} />;
  }
}

const mapStateToProps = (state) => {
  return {
    vacancies: state.vacanciesPage.vacancies,
  };
};

export default connect(mapStateToProps, null)(VacanciesContainer);
