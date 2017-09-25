import { connect } from 'react-redux';
import ScrollHeader from './scroll_header';
import { login, logout } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    user: state.session.currentUser,
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    login: (user) => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScrollHeader);
