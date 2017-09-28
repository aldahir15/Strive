import { connect } from 'react-redux';
import CalendarIndex from './calendar_index';
import { fetchAllCalendars, createCalendar, deleteCalendar } from '../../actions/calendar_actions';
import { fetchUserEvents } from '../../actions/user_event_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    calendars: state.calendar,
    user: state.session.currentUser,
    userEvents: state.userEvents
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAllCalendars: () => dispatch(fetchAllCalendars()),
  fetchUserEvents: () => dispatch(fetchUserEvents())
});


export default connect(mapStateToProps, mapDispatchToProps)(CalendarIndex);
