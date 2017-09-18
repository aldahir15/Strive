import React from 'react';
import { Provider } from 'react-redux';
import { Link, Switch } from 'react-router-dom';
import LoggedOffGreetingContainer from './greeting/logged_off_greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import { requireLoginRoute } from '../util/autherization_util';

const App = () => {
  return (
    <div>
      <Link to="/">
        <h1>Strive</h1>
      </Link>
      <LoggedOffGreetingContainer />
      <Switch>
        <requireLoginRoute path="/login" component={SessionFormContainer} />
        <requireLoginRoute path="/signup" component={SessionFormContainer} />
      </Switch>
    </div>
  );
};

export default App;
