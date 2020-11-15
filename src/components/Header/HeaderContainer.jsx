import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import Header from "./Header";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    UserLogin: state.auth.Login,
    UserId: state.auth.ChildID,
    IsCompany: state.auth.IsCompany,
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, null)
)(HeaderContainer);
