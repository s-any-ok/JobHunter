import React from "react";
import "./App.css";
import { Route, Switch, withRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import VacanciesContainer from "./components/Vacancies/VacanciesContainer";
import CompaniesContainer from "./components/Companies/CompaniesContainer";
import CompanyRegister from "./components/CompanyRegister/CompanyRegister";
import EmployeesContainer from "./components/Employees/EmployeesContainer";
import EmployeeRegisterContainer from "./components/EmployeeRegister/EmployeeRegisterContainer";
import EmployeeProfileContainer from "./components/EmployeeProfile/EmployeeProfileContainer";
import { connect } from "react-redux";
import { getEmployees } from "./redux/employeesReducer";
import { getVacancies } from "./redux/vacanciesReducer";
import { compose } from "redux";
import { getAuthUser } from "./redux/authReducer";
import HeaderContainer from "./components/Header/HeaderContainer";
import { getCompanies } from "./redux/companiesReducer";

class App extends React.Component {
  componentDidMount() {
    this.props.getVacancies();
    this.props.getCompanies();
    this.props.getEmployees();
    this.props.getAuthUser();
  }
  render() {
    return (
      <div className="wrapper">
        <HeaderContainer />
        <Footer />
        <div className="wrapper-content">
          <Switch>
            <Route path="/" render={() => <EmployeesContainer />} exact />
            <Route path="/about" render={() => <About />} />
            <Route path="/companies" render={() => <CompaniesContainer />} />
            <Route path="/vacancies" render={() => <VacanciesContainer />} />
            <Route path="/employees" render={() => <EmployeesContainer />} />
            <Route path="/compRegister" render={() => <CompanyRegister />} />
            <Route
              path="/empRegister"
              render={() => <EmployeeRegisterContainer />}
            />
            <Route
              path="/empProfile/:id?"
              render={() => <EmployeeProfileContainer />}
            />
          </Switch>
        </div>
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
