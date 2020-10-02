import React from "react";
import s from "./Vacancies.module.css";
import Vacancy from "./Vacancy/Vacancy";
import * as axios from "axios";

const Vacancies = ({ vacancies, setVacancies }) => {
  if (vacancies.length === 0) {
    axios.get("https://localhost:44374/api/vacancy").then((response) => {
      setVacancies(response.data);
    });
  }

  return (
    <div>
      <div className={s.title}>Vacancies</div>
      {vacancies.map((v) => (
        <Vacancy vacancy={v} />
      ))}
    </div>
  );
};

export default Vacancies;
