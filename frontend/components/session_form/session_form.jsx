import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Typist from 'react-typist';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);

    this.state = {username: this.props.user.username,
                  password: this.props.user.password};
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field){
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.action(this.state);
  }

  handleDemo(e){
    e.preventDefault();
    const user = {username: "demo", password: "password"};
    if (this.props.text === "Log In") {
      this.props.action(user);
    } else {
      this.props.login(user);
    }
  }

  showErrors() {
    return(
      <ul className="errors-messages">
        {this.props.errors.map((error) => (
          <li>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  demoLogin(){
      return(
      <button className="submit-session" onClick={this.handleDemo}>
        DEMO LOGIN
      </button>);
  }

  submitDemo(){
    setTimeout(() => {
      document.getElementsByClassName("submit-session")[0].style.color = "red";
      document.getElementsByClassName("submit-session")[0].style.backgroundColor = "white";
      setTimeout(() => {
      document.getElementsByClassName("submit-session")[0].click();
      }, 500);
    }, 2500);
  }

  render(){
    if (this.props.text === "Demo Log In") {
      return (
        <div className="session-form-div">
        <div className="session-exit-button-container">
        <img src = 'http://res.cloudinary.com/ddgt25kwb/image/upload/c_scale,w_54/v1506464706/9982_23980_cancel_close_exit_1_p3x21t.png'
        onClick={this.props.closeModal}></img>
        </div>
        <h1>{this.props.text}</h1>
        <form onSubmit={this.handleSubmit} className="session-form">
        {this.showErrors()}

        <div className="session-inputs-demo">
        <Typist
        className="TypistExample-header"
        avgTypingSpeed={25}
        startDelay={500}
        cursor={{show: false}}>
        <p>{this.state.username}</p>
        </Typist>
        </div>
        <div className="height-divider"></div>
        <div className="session-inputs-demo">
        <Typist
        className="TypistExample-header"
        avgTypingSpeed={25}
        startDelay={1200}
        cursor={{show: false}}>
        <p>********</p>
        </Typist>
        </div>
        <div className="height-divider"></div>
        <input type="submit" value="Submit" className="submit-session"/>
        {this.props.text === "Demo Log In" ? this.submitDemo() : this.demoLogin()}
        </form>
        </div>
      );
    } else {
      return (
        <div className="session-form-div">
        <div className="session-exit-button-container">
        <img src = 'http://res.cloudinary.com/ddgt25kwb/image/upload/c_scale,w_54/v1506464706/9982_23980_cancel_close_exit_1_p3x21t.png'
        onClick={this.props.closeModal}></img>
        </div>
        <h1>{this.props.text}</h1>
        <form onSubmit={this.handleSubmit} className="session-form">
        {this.showErrors()}
        <input type="text" onChange={this.update("username")}
        placeholder="Username" className="session-inputs" value={this.state.username} />
        <div className="height-divider"></div>
        <input type="password" onChange={this.update("password")}
        placeholder="Password" className="session-inputs" value={this.state.password} />
        <div className="height-divider"></div>
        <input type="submit" value="Submit" className="submit-session"/>
        {this.props.text === "Demo Log In" ? this.submitDemo() : this.demoLogin()}
        </form>
        </div>
      );
    }
  }

}

export default SessionForm;
