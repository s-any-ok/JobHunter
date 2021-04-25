import React from "react";
import { connect } from "react-redux";
import Preloader from "../common/Preloader/Preloader";
import s from "./Vacancies.module.css";
import Vacancy from "./Vacancy/Vacancy";

class VacanciesContainer extends React.Component {
  render() {
    return (
      <Vacancies
        vacancies={this.props.vacancies}
        isFetching={this.props.isFetching}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.companiesPage.isFetching,
    vacancies: state.vacanciesPage.vacancies,
  };
};

//-----------------------------------------------//
const Vacancies = ({ vacancies, isFetching }) => {
  return (
    <div className={s.container}>
      <div className={"title"}>Vacancies</div>
      {isFetching ? <Preloader /> : null}
      <div className={s.vacancyContainer}>
        {vacancies.map((v) => (
          <div key={v.VacancyID}>
            <Vacancy vacancy={v} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, null)(VacanciesContainer);
