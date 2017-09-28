import { connect } from 'react-redux';
import EventsShow from './event_show';
import { fetchEvents, fetchEvent, deleteEvent } from '../../actions/event_actions';
import { updateUser } from '../../actions/session_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    events: state.event,
    user: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => dispatch(fetchEvents()),
  deleteEvent: (id) => dispatch(deleteEvent(id)),
  updateUser: (id, data) => dispatch(updateUser(id, data))
});


export default connect(mapStateToProps, mapDispatchToProps)(EventsShow);
