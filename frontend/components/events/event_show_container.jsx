import { connect } from 'react-redux';
import EventsShow from './event_show';
import { fetchEvents, fetchEvent, deleteEvent } from '../../actions/event_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    events: state.event
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchEvent: (id) => dispatch(fetchEvent(id)),
  deleteEvent: (id) => dispatch(deleteEvent(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(EventsShow);
