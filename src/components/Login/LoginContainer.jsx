import React, { Component } from "react";
import { connect } from "react-redux";
import { getLoginUser } from "../../redux/authReducer";
import Login from "./Login";

class LoginContainer extends Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.getLoginUser(e.target);
  }
  render() {
    return (
     <Login isAuth={this.isAuth} handleSubmit={this.handleSubmit.bind(this)} {...this.props}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, {getLoginUser})(LoginContainer);
