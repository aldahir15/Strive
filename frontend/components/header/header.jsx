import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import AppModal from '../Modal';
import SigninFormContainer from '../session_form/signin_form_container';
import SignupFormContainer from '../session_form/signup_form_container';



const loggedin = (props) => {
  return (
    <div className="logout-header">
      <button className="myButton" onClick={props.logout}>Log Out</button>
      <p>HELLO {props.user.username}</p>
      <div className="divider2"></div>
      <ul className="login-ul-nav">
      <Link to="/home"><p>Home</p></Link>
      <Link to="#"><p>Train</p></Link>
      <Link to="#"><p>Explore</p></Link>
        <Link to="#"><p>Connect</p></Link>
      </ul>
    </div>
  );
};

const loggedout = () => {
  return (
    <div className="login-header">
      <AppModal action={SigninFormContainer} className="button"/>
      <div className="divider"></div>
      <AppModal action={SignupFormContainer} className="signup-button"/>
      <p>HERE TO JOIN?</p>
    </div>
  );
};

const Greeting = (props) => {
  return props.user ? loggedin(props) : loggedout();
};

export default Greeting;
