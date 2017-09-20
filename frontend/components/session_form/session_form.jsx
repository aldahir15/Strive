import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    console.log(this.state);
  }

  render(){
    return (
      <div className="session-form-div">
        <form onSubmit={this.handleSubmit} className="session-form">
          <label><p>Username:</p>
            <input type="text" onChange={this.update("username")} />
          </label>

          <label><p>Password:</p>
            <input type="password" onChange={this.update("password")} />
          </label>

          <input type="submit" value="Submit" className="submit-session"/>
        </form>
      </div>
    );
  }

}

export default SessionForm;
