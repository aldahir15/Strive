import { connect } from 'react-redux';
import Calendar from './calendar';
import { fetchCalendar, createCalendar, deleteCalendar } from '../../actions/calendar_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state) => {
  console.log("STATE", state);
  const day = state.calendar;
  return {
    day,
    errors: state.errors.calendar
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchCalendar: (id) => dispatch(fetchCalendar(id)),
  createCalendar: (calendar) => dispatch(createCalendar(calendar)),
  deleteCalendar: (id) => dispatch(deleteCalendar(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
