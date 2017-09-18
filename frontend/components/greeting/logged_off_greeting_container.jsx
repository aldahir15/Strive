import { connect } from 'react-redux';
import LoggedOffGreeting from './logged_off_greeting';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    user: state.session.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoggedOffGreeting);
