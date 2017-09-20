import React from 'react';
import { Link } from 'react-router-dom';


const loggedin = (props) => {
  return (
    <div className="logout-header">
      <button className="myButton" onClick={props.logout}>Log Out</button>
      <p>HELLO {props.user.username}</p>
      <div className="divider2"></div>
      <ul className="login-ul-nav">
      <Link to="#"><p>Home</p></Link>
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
      <Link to="/login" className="button">Login</Link>
      <div className="divider"></div>
      <Link to="/signup" className="signup-button">Signup</Link>
      <p>HERE TO JOIN?</p>
    </div>
  );
};

const Greeting = (props) => {
  return props.user ? loggedin(props) : loggedout();
};

export default Greeting;
