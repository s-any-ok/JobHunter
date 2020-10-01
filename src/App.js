import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HeaderNav from "./components/HeaderNav/HeaderNav";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Vacancies from "./components/Vacancies/Vacancies";
import Companies from "./components/Companies/Companies";
import Employees from "./components/Employees/Employees";
import News from "./components/News/News";
import Register from "./components/Register/Register";
import EmployeeProfile from "./components/EmployeeProfile/EmployeeProfile";

const App = () => {
  return (
    <div className="wrapper">
      <HeaderNav />
      <Footer />
      <div className="wrapper-content">
        <Switch>
          <Route path="/" render={() => <About />} exact />
          <Route path="/about" render={() => <About />} />
          <Route path="/companies" render={() => <Companies />} />
          <Route path="/vacancies" render={() => <Vacancies />} />
          <Route path="/employees" render={() => <Employees />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/register" render={() => <Register />} />
          <Route path="/profile" render={() => <EmployeeProfile />} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
