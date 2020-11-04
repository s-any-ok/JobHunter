import React from "react";
import "./App.css";
import { Route, Switch, withRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import VacanciesComponent from "./components/Vacancies/VacanciesComponent";
import CompaniesComponent from "./components/Companies/CompaniesComponent";
import CompanyRegister from "./components/CmpRegister/CompanyRegister";
import EmployeesContainer from "./components/Employees/EmployeesContainer";
import EmployeeRegisterContainer from "./components/EmpRegister/EmployeeRegisterContainer";
import EmployeeProfileContainer from "./components/EmpProfile/EmployeeProfileContainer";
import { connect } from "react-redux";
import { getEmployees } from "./redux/empReducer";
import { getVacancies } from "./redux/vacReducer";
import { compose } from "redux";
import { getAuthUser } from "./redux/authReducer";
import HeaderContainer from "./components/Header/HeaderContainer";
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
      <div className="wrapper">
        <HeaderContainer />
        <Footer />
        <div className="wrapper-content">
          <Switch>
            <Route path="/" render={() => <EmployeesContainer />} exact />
            <Route path="/about" render={() => <About />} />
            <Route path="/companies" render={() => <CompaniesComponent />} />
            <Route path="/vacancies" render={() => <VacanciesComponent />} />
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
