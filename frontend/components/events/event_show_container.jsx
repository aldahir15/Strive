import { connect } from 'react-redux';
import EventsShow from './event_show';
import { fetchEvents, fetchEvent, deleteEvent } from '../../actions/event_actions';
import { createUserEvent, fetchUserEvents } from '../../actions/user_event_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    events: state.event,
    user: state.session.currentUser,
    userEvents: state.userEvents
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => dispatch(fetchEvents()),
  deleteEvent: (id) => dispatch(deleteEvent(id)),
  createUserEvent: (userEvent) => dispatch(createUserEvent(userEvent)),
  fetchUserEvents: () => dispatch(fetchUserEvents())
});


export default connect(mapStateToProps, mapDispatchToProps)(EventsShow);
