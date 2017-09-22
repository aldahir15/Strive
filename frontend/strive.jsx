import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store";
import Root from './components/root';
import {login} from "./actions/session_actions";

import {fetchPaths} from "./util/paths_api_util";

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.fetchPaths = fetchPaths;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
