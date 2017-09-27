import { connect } from 'react-redux';
import EventCreate from './event_create_form';
import { fetchEvents, fetchEvent, createEvent, deleteEvent } from '../../actions/event_actions';
import {withRouter} from 'react-router-dom';
import {fetchAllCalendars} from '../../actions/calendar_actions';

const mapStateToProps = (state) => {
  return {
    event: state.event,
    calendars: state.calendar
  };
};

const mapDispatchToProps = (dispatch) => ({
  createEvent: (event) => dispatch(createEvent(event)),
  fetchAllCalendars: () => dispatch(fetchAllCalendars())
});


export default connect(mapStateToProps, mapDispatchToProps)(EventCreate);
