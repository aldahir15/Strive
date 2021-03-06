import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { Parallax } from 'react-parallax';
import ReactDOM from 'react-dom';
import ScrollHeaderContainer from '../header/scroll_header_container';


class Greeting extends React.Component {
  constructor(props){
    super(props);
    this.handleScroll = this.handleScroll.bind(this);

  }

  componentDidMount(){
    if (!this.props.user) {
      window.addEventListener("scroll", this.handleScroll);
    }
    // window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(){
    if (document.getElementsByClassName("scroll-login-header")[0]) {
      if (document.body.scrollTop > 881 || document.documentElement.scrollTop > 881) {
        // document.getElementsByClassName("scroll-login-header")[0].style.display = "flex";
        document.getElementsByClassName("scroll-login-header")[0].style.transform = "translate3d(0px, -160%, 0px)";
      } else {
        // document.getElementsByClassName("scroll-login-header")[0].style.display = "none";
        document.getElementsByClassName("scroll-login-header")[0].style.transform = "translate3d(0, -300%, 0)";
      }
    }
  }

  render(){
    return (
    <div>
      <ScrollHeaderContainer />
      <Parallax bgImage="http://res.cloudinary.com/ddgt25kwb/image/upload/q_100/v1506478414/running_u0bqnl.jpg" strength={400} className="logged-off-greeting">
        <div className="slogan">
          <img className= "logo-img" src="http://res.cloudinary.com/ddgt25kwb/image/upload/v1505944279/logo_cpwpsb.png" />
          <h3>Helping you </h3>
          <h3>become a better you</h3>

        </div>
        <div className="carrot-container">
          <p>Explore Strive</p>
          <div className="carrot"></div>
        </div>
      </Parallax>
      <Parallax strength={400} className="parallax-show-1">
        <div className="why-us">
          <h4>WHY US? </h4>
          <h3>IF YOU'RE OUT AND ABOUT AND NEED</h3>
          <h3>MOTIVATION TO GO OUT THERE AND EXERCISE</h3>
          <h3>YOU'VE COME TO THE RIGHT PLACE</h3>
        </div>
        <div className="first-picture-showcase">
          <p>1. BEGIN EXPLORING</p>
          <img src="http://res.cloudinary.com/ddgt25kwb/image/upload/q_100/v1506648895/front-page-map_tkbflr.png"/>
        </div>
      </Parallax>
      <Parallax strength={400} className="parallax-show-1">
        <div className="second-picture-showcase">
          <p>2. LOG YOUR JOURNEY</p>
          <img src="http://res.cloudinary.com/ddgt25kwb/image/upload/q_100/v1506648891/front-page-calendar_rzf7o9.png"/>
        </div>
      </Parallax>
      <Parallax strength={400} className="parallax-show-2">
        <div className="second-picture-showcase">
          <p>3. CONNECT WITH OTHERS</p>
          <img src="http://res.cloudinary.com/ddgt25kwb/image/upload/v1506648892/front-page-events_h9zmnc.png"/>
        </div>
      </Parallax>
    </div>);
  }
}
export default Greeting;
