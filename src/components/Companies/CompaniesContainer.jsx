import React from "react";
import { connect } from "react-redux";
import Companies from "./Companies";

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

export default connect(mapStateToProps, null)(CompaniesContainer);
