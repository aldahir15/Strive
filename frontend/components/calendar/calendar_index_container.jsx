import { connect } from 'react-redux';
import CalendarIndex from './calendar_index';
import { fetchAllCalendars, createCalendar, deleteCalendar } from '../../actions/calendar_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    calendars: state.calendar
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAllCalendars: () => dispatch(fetchAllCalendars())
});


export default connect(mapStateToProps, mapDispatchToProps)(CalendarIndex);
