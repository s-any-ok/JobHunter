import React from "react";
import { connect } from "react-redux";
import { vacancyAPI } from "../../api/api";
import { setVacancies } from "../../redux/vacanciesReducer";
import Vacancies from "./Vacancies";
class VacanciesContainer extends React.Component {
  componentDidMount() {
    if (this.props.vacancies.length === 0) {
      vacancyAPI.getVacancies().then((data) => this.props.setVacancies(data));
    }
  }

  render() {
    return <Vacancies vacancies={this.props.vacancies} />;
  }
}

const mapStateToProps = (state) => {
  return {
    vacancies: state.vacanciesPage.vacancies,
  };
};
const mapDispatchToProps = {
  setVacancies,
};
export default connect(mapStateToProps, mapDispatchToProps)(VacanciesContainer);
