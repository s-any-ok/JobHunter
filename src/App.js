import React from "react";
import "./App.css";
import {Container} from 'react-bootstrap';
import { Route, Switch, withRouter } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import RatingTableContainer from "./components/RatingTable/RatingTableContainer";
import VacanciesComponent from "./components/Vacancies/VacanciesComponent";
import CompaniesComponent from "./components/Companies/CompaniesComponent";
import CompanyRegisterContainer from "./components/CmpRegister/CompanyRegisterContainer";
import EmployeesContainer from "./components/Employees/EmployeesContainer";
import EmployeeRegisterContainer from "./components/EmpRegister/EmployeeRegisterContainer";
import EmployeeProfileContainer from "./components/EmpProfile/EmployeeProfileContainer";
import CompanyProfileContainer from "./components/СmpProfile/CompanyProfileContainer";
import VacancyInfoContainer from "./components/VacancyInfo/VacancyInfoContainer";
import { connect } from "react-redux";
import { getEmployees } from "./redux/empReducer";
import { getVacancies } from "./redux/vacReducer";
import { compose } from "redux";
import { getAuthUser } from "./redux/authReducer";
import { getCompanies } from "./redux/cmpReducer";

class App extends React.Component {
  componentDidMount() {
    this.props.getVacancies();
    this.props.getCompanies();
    this.props.getEmployees();
    this.props.getAuthUser();
  }
  render() {
    return (
      <div className={"wrapper"}>
        <HeaderContainer />
        <Container className={"container"}>
          <Switch>
            <Route path="/" render={() => <EmployeesContainer />} exact />
            <Route
              path="/ratingTable"
              render={() => <RatingTableContainer />}
            />
            <Route path="/about" render={() => <About />} />
            <Route path="/companies" render={() => <CompaniesComponent />} />
            <Route path="/vacancies" render={() => <VacanciesComponent />} />
            <Route path="/employees" render={() => <EmployeesContainer />} />
            <Route
              path="/compRegister"
              render={() => <CompanyRegisterContainer />}
            />
            <Route
              path="/empRegister"
              render={() => <EmployeeRegisterContainer />}
            />
            <Route
              path="/empProfile/:id?"
              render={() => <EmployeeProfileContainer />}
            />
            <Route
              path="/cmpProfile/:id?"
              render={() => <CompanyProfileContainer />}
            />
            <Route
              path="/Vacancy/:id?"
              render={() => <VacancyInfoContainer />}
            />
          </Switch>
        </Container>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = {
  getEmployees,
  getVacancies,
  getAuthUser,
  getCompanies,
};

export default compose(withRouter, connect(null, mapDispatchToProps))(App);
