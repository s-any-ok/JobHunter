import React from "react";
import { connect } from "react-redux";
import { setCompanies } from "../../redux/companiesReducer";
import Companies from "./Companies";

class CompaniesContainer extends React.Component {
  render(){
    return(
      <Companies companies={this.props.companies}/>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    companies: state.comoaniesPage.companies,
  };
};
const mapDispatchToProps = {
    setCompanies
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompaniesContainer);
