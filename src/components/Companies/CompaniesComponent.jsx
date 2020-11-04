import React from "react";
import s from "./Companies.module.css";
import { connect } from "react-redux";
import Company from "./Company/Company";

class CompaniesContainer extends React.Component {
  render() {
    return <Companies companies={this.props.companies} />;
  }
}

const mapStateToProps = (state) => {
  return {
    companies: state.companiesPage.companies,
  };
};

//-----------------------------------------------//
const Companies = ({ companies }) => {
  return (
    <div className={s.container}>
      <div className={s.title}>Companies</div>
      <div>
        {companies.map((cmp) => {
          return <Company cmp={cmp} />;
        })}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, null)(CompaniesContainer);
