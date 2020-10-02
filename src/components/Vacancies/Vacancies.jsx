import React from "react";
import s from "./Vacancies.module.css";
import Vacancy from "./Vacancy/Vacancy";

const Vacancies = ({ vacancies }) => {
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
