import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';
import requireLogin from './require_login';

const mapStateToProps = state => (
  {loggedIn: Boolean(state.session.currentUser)}
);

export const requireLoginRoute =
  withRouter(connect(mapStateToProps, null)(requireLogin));
