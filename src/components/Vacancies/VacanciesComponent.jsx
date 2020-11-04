import React from "react";
import { connect } from "react-redux";
import s from "./Vacancies.module.css";
import Vacancy from "./Vacancy/Vacancy";

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

//-----------------------------------------------//
const Vacancies = ({ vacancies }) => {
  return (
    <div>
      <div className={s.title}>Vacancies</div>
      {vacancies.map((v) => (
        <Vacancy vacancy={v} />
      ))}
    </div>
  );
};

export default connect(mapStateToProps, null)(VacanciesContainer);
