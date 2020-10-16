import React from "react";
import { connect } from "react-redux";
import { getLogoutUser } from "../../redux/authReducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
  render() {
    return (
      <Header {...this.props} history={this.props.history}/>
    );
  }
};
const mapStateToProps = (state) => {
 
  return {
    isAuth: state.auth.isAuth,
    UserLogin: state.auth.Login,
  };
  
};

export default connect(mapStateToProps, {getLogoutUser})(HeaderContainer);
