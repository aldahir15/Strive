import { connect } from 'react-redux';
import LoggedOffGreeting from './logged_off_greeting';
import { logout } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return {
    user: state.session.user
  };
};

export default connect(mapStateToProps, null)(LoggedOffGreeting);
