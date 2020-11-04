import React, { Component } from "react";
import { connect } from "react-redux";
import { getLoginUser } from "../../redux/authReducer";
import Login from "./Login";

class LoginContainer extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.getLoginUser(e.target);
  };
  render() {
    return <Login handleSubmit={this.handleSubmit} {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    ChildID: state.auth.ChildID,
  };
};

export default connect(mapStateToProps, { getLoginUser })(LoginContainer);
