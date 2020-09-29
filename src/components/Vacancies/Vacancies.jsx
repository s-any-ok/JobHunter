import React from "react";
import s from "./Vacancies.module.css";
import Vacancy from "./Vacancy/Vacancy";
// import * as axios from 'axios';

class Vacancies extends React.Component {
  constructor(props) {
    super(props);
    this.state = { info: [] };
  }
  refresh() {
    fetch("https://localhost:44374/api/vacancy")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          info: data,
        });
      });
  }

  componentDidMount() {
    this.refresh();
  }
  render() {
    const { info } = this.state;
    return (
      <div>
        <div className={s.title}>Vacancies</div>
        {info.map((v) => (
          <Vacancy vacancy={v} />
        ))}
      </div>
    );
  }
}

export default Vacancies;
