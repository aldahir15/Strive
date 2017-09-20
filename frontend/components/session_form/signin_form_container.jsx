import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    action: (user) => dispatch(login(user))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
