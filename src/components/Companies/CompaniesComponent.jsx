import React from "react";
import s from "./Companies.module.css";
import { connect } from "react-redux";
import Company from "./Company/Company";
import Preloader from "../common/Preloader/Preloader";

class CompaniesContainer extends React.Component {
  render() {
    return (
      <Companies
        companies={this.props.companies}
        isFetching={this.props.isFetching}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.companiesPage.isFetching,
    companies: state.companiesPage.companies,
  };
};

//-----------------------------------------------//
const Companies = ({ companies, isFetching }) => {
  return (
    <div className={s.container}>
      <div className={s.title}>Companies</div>
      {isFetching ? <Preloader /> : null}
      <div>
        {companies.map((cmp) => {
          return <Company cmp={cmp} />;
        })}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, null)(CompaniesContainer);
