import React from "react";
import s from "./Companies.module.css";
import Company from "./Company/Company";
const Companies = ({companies}) => {
    return (
      <div>
        <div className={s.title}>Companies</div>
        {companies.map((cmp) => {
          return (
            <Company cmp={cmp}/>
          );
        })}
      </div>
    );
 
}

export default Companies;
