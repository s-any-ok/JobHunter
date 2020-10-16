import React from "react";
import s from "./Company.module.css";
import myPhoto from "../../../assets/img/jh.png";
const Company = ({ cmp }) => {
  return (
    <div className={s.container}>
      <div className={s.compInfo}>
        <div>
          <img className={s.compImg} src={myPhoto} alt={cmp.CompanyName} />
        </div>
        <div className={s.compInfoText}>
          <div className={s.compName}>{cmp.CompanyName}</div>
          <div className={s.vacCount}>{cmp.VacancyCount} вакансій</div>
        </div>
      </div>
    </div>
  );
};

export default Company;
