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
    this.logout = this.logout.bind(this);
  }

  logout(){
    this.props.logout();
  }

  loggedin(){
    return (
      <div className="logout-header">
        <div className="button-container">
          <Link to="#" className="myButton" onClick={this.logout}>Log Out</Link>
        </div>
        <p className="hello-user">HELLO {this.props.user.username}</p>
        <div className="divider2"></div>
        <ul className="login-ul-nav">
          <Link to="/home" className="home-button"><p>Home</p></Link>
          <Link to="/train"><p>Train</p></Link>
          <Link to="/explore"><p>Explore</p></Link>
          <Link to="/connect"><p>Connect</p></Link>
        </ul>
          <img src="http://res.cloudinary.com/ddgt25kwb/image/upload/v1505944279/logo_cpwpsb.png"
          onClick={() => document.getElementsByClassName("home-button")[0].click()}/>
      </div>
    );
  }

  loggedout(){
    return (
      <div className="login-header">
        <AppModal action={SigninFormContainer} className="login-button"/>
        <AppModal className="demo-button" action={SigninFormContainer} demo={true}/>
        <div className="divider"></div>
        <AppModal action={SignupFormContainer} className="signup-button"/>
        <p>HERE TO JOIN?</p>
      </div>
    );
  }

  render(){
    return this.props.user ? this.loggedin() : this.loggedout();
  }
}
export default Header;

//onClick={() =>
//  this.props.login({username: "demo", password: "password"})}
