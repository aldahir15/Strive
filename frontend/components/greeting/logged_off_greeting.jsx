import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { Parallax } from 'react-parallax';
import ReactDOM from 'react-dom';


class Greeting extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
    <div>
      <Parallax bgImage="http://res.cloudinary.com/ddgt25kwb/image/upload/v1505944281/run2_hkujiy.jpg" strength={400} className="logged-off-greeting">
        <div className="slogan">
          <img className= "logo-img" src="http://res.cloudinary.com/ddgt25kwb/image/upload/v1505944279/logo_cpwpsb.png" />
          <h3>Helping you </h3>
          <h3>become a better you</h3>

        </div>
      </Parallax>
      <Parallax strength={400} className="parallax-boiz">
        <div className="slogan">
          <img className= "logo-img" src="http://res.cloudinary.com/ddgt25kwb/image/upload/v1505944279/logo_cpwpsb.png" />
          <h3>Helping you </h3>
          <h3>become a better you</h3>

        </div>
      </Parallax>
    </div>);
  }
}
export default Greeting;
