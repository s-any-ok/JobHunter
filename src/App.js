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

const App = () => {
  return (
    <div className="wrapper">
      <HeaderNav />
      <div className="wrapper-content">
        <Switch>
          <Route path="/" component={About} exact />
          <Route path="/companies" component={Companies} />
          <Route path="/vacancies" component={Vacancies} />
          <Route path="/employees" component={Employees} />
          <Route path="/news" component={News} />
          <Route path="/about" component={About} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
