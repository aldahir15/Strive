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
        <button onClick={() => document.getElementsByClassName("signup-button")[0].click()}
          className="scroll-login-button">Sign Up</button>
        <button className="scroll-demo-button" onClick={() =>
          this.props.login({username: "demo", password: "password"})}>Demo Login</button>
        <div className="scroll-divider"></div>
        <button onClick={() => document.getElementsByClassName("login-button")[0].click()}
          className="scroll-signup-button">Log In</button>
        <p>HERE TO JOIN?</p>
        <img src="http://res.cloudinary.com/ddgt25kwb/image/upload/v1505944279/logo_cpwpsb.png"/>
      </div>
    );
  }

  render(){
    return this.props.user ? <div></div> : this.loggedout();
  }
}
export default Header;
