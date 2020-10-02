import React from "react";
import { connect } from "react-redux";
import { setVacancies } from "../../redux/vacanciesReducer";
import Vacancies from "./Vacancies";
import * as axios from "axios";

class VacanciesContainer extends React.Component {
  componentDidMount() {
    axios.get("https://localhost:44374/api/vacancy").then((response) => {
      this.props.setVacancies(response.data);
    });
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
const mapDispatchToProps = (dispatch) => {
  return {
    setVacancies: (vacancies) => {
      dispatch(setVacancies(vacancies));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(VacanciesContainer);
