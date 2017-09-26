import { connect } from 'react-redux';
import Calendar from './calendar';
import { fetchAllCalendars, fetchCalendar, createCalendar, deleteCalendar }
  from '../../actions/calendar_actions';
import { fetchPaths } from '../../actions/path_actions';
import { fetchQuote } from '../../actions/quote_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state) => {
  const calendar = state.calendar;
  const quote = state.quote;
  const path = state.path;
  return {
    calendar,
    quote,
    path,
    errors: state.errors.calendar
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchAllCalendars: () => dispatch(fetchAllCalendars()),
  fetchCalendar: (id) => dispatch(fetchCalendar(id)),
  createCalendar: (calendar) => dispatch(createCalendar(calendar)),
  deleteCalendar: (id) => dispatch(deleteCalendar(id)),
  fetchQuote: () => dispatch(fetchQuote()),
  fetchPaths: () => dispatch(fetchPaths())
});


export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
