import React from 'react';
import { Provider } from 'react-redux';
import { Link, Switch } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import HeaderContainer from './header/header_container';
import { Route } from 'react-router-dom';
import {RequireLoginRoute, LoggedinRoute} from '../util/authorization_util';
import CalendarContainer from './calendar/calendar_container';

const App = () => {
  return (
    <div>
      <HeaderContainer />
      <Switch>
        <Route exact path="/" component={GreetingContainer} />
        <RequireLoginRoute path="/login" component={SessionFormContainer} />
        <RequireLoginRoute path="/signup" component={SessionFormContainer} />
        <Route path="/home" component={CalendarContainer} />
      </Switch>
    </div>
  );
};

export default App;
