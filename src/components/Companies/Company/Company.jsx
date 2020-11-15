import React from "react";
import s from "./Company.module.css";
import myPhoto from "../../../assets/img/cmp.png";
import { NavLink } from "react-router-dom";
const Company = ({ cmp }) => {
  return (
    <div className={s.container}>
      <div className={s.compInfo}>
        <div>
          <NavLink to={"/cmpProfile/" + cmp.CompanyID}>
            <img className={s.compImg} src={myPhoto} alt={cmp.CompName} />
          </NavLink>
        </div>
        <div className={s.compInfoText}>
          <div className={s.compName}>{cmp.CompName}</div>
          <div className={s.vacCount}>{cmp.VacancyCount} вакансій</div>
        </div>
      </div>
    </div>
  );
};

export default Company;
