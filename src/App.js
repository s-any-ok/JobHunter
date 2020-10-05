import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import News from "./components/News/News";
import EmployeeProfile from "./components/EmployeeProfile/EmployeeProfile";
import VacanciesContainer from "./components/Vacancies/VacanciesContainer";
import CompaniesContainer from "./components/Companies/CompaniesContainer";
import CompanyRegister from "./components/CompanyRegister/CompanyRegister";
import EmployeeRegister from "./components/EmployeeRegister/EmployeeRegister";
import EmployeesContainer from "./components/Employees/EmployeesContainer";

const App = (props) => {
  return (
    <div className="wrapper">
      <Header />
      <Footer />
      <div className="wrapper-content">
        <Switch>
          <Route path="/" render={() => <About />} exact />
          <Route path="/about" render={() => <About />} />
          <Route path="/companies" render={() => <CompaniesContainer />} />
          <Route path="/vacancies" render={() => <VacanciesContainer />} />
          <Route path="/employees" render={() => <EmployeesContainer />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/compRegister" render={() => <CompanyRegister />} />
          <Route path="/empRegister" render={() => <EmployeeRegister />} />
          <Route path="/profile" render={() => <EmployeeProfile />} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
