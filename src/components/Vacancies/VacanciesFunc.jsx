import React from "react";
import s from "./Vacancies.module.css";
import Vacancy from "./Vacancy/Vacancy";
// import * as axios from 'axios';

const VacanciesFunc = ({ vacancies }) => {
  return (
    <div>
      <div className={s.title}>Vacancies</div>
      {vacancies.map((v) => (
        <Vacancy vacancy={v} />
      ))}
    </div>
  );
};

export default VacanciesFunc;
