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
    this.handleScroll = this.handleScroll.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount(){
    console.log(this.props.history);
    if (!this.props.user) {
      window.addEventListener("scroll", this.handleScroll);
    }
    // window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(){
    if (document.body.scrollTop > 881 || document.documentElement.scrollTop > 881) {
      // document.getElementsByClassName("scroll-login-header")[0].style.display = "flex";
      document.getElementsByClassName("scroll-login-header")[0].style.transform = "translate3d(0px, 0px, 0px)";
    } else {
      // document.getElementsByClassName("scroll-login-header")[0].style.display = "none";
      document.getElementsByClassName("scroll-login-header")[0].style.transform = "translate3d(0, -150%, 0)";
    }
  }

  logout(){
    console.log(this.props.history);
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
        <a className="demo-button" onClick={() =>
          this.props.login({username: "demo", password: "password"})}>Demo Login</a>
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
