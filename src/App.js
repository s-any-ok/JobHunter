import React from "react";
import "./App.css";
import { Route, Switch, withRouter } from "react-router-dom";
import Header from "./components/Header/Header";
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

class App extends React.Component {
  componentDidMount() {
    this.props.getVacancies();
    this.props.getEmployees();
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
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
              path="/profile"
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
};

export default compose(withRouter, connect(null, mapDispatchToProps))(App);
