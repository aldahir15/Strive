import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import AppModal from '../Modal';
import SigninFormContainer from '../session_form/signin_form_container';
import SignupFormContainer from '../session_form/signup_form_container';


class Header extends React.Component {
  constructor(props){
    super(props);
  }

  loggedout(){
    return (
      <div className="scroll-login-header">
        <a onClick={() => document.getElementsByClassName("login-button")[0].click()}
      className="scroll-signup-link">Log In</a>
        <a onClick={() => document.getElementsByClassName("signup-button")[0].click()}
        className="scroll-login-link">Sign Up</a>
        <a className="scroll-demo-button" onClick={() => document.getElementsByClassName("demo-login-button")[0].click()}>
          Demo Login</a>
        <div className="scroll-divider"></div>
        <img src="http://res.cloudinary.com/ddgt25kwb/image/upload/v1505944279/logo_cpwpsb.png"/>
      </div>
    );
  }

  render(){
    return this.props.user ? <div></div> : this.loggedout();
  }
}
export default Header;
