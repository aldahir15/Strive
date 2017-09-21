import { connect } from 'react-redux';
import Calendar from './calendar';
import { fetchCalendar, createCalendar, deleteCalendar } from '../../actions/calendar_actions';
import { fetchQuote } from '../../actions/quote_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state) => {
  const day = state.calendar;
  const quote = state.quote;
  return {
    day,
    quote,
    errors: state.errors.calendar
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchCalendar: (id) => dispatch(fetchCalendar(id)),
  createCalendar: (calendar) => dispatch(createCalendar(calendar)),
  deleteCalendar: (id) => dispatch(deleteCalendar(id)),
  fetchQuote: () => dispatch(fetchQuote())
});


export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
