import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);

    this.state = {username: "",
                  password: ""};
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

  render(){
    return (
      <div className="session-form-div">
        <h1>{this.props.text}</h1>
        <form onSubmit={this.handleSubmit} className="session-form">
          {this.showErrors()}
          <label><p>Username:</p>
            <input type="text" onChange={this.update("username")} />
          </label>

          <label><p>Password:</p>
            <input type="password" onChange={this.update("password")} />
          </label>

          <input type="submit" value="Submit" className="submit-session"/>
        </form>
        {this.demoLogin()}
      </div>
    );
  }

}

export default SessionForm;
