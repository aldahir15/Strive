import { connect } from 'react-redux';
import EventsIndex from './events_index';
import { fetchEvents, fetchEvent, deleteEvent } from '../../actions/event_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    events: state.event
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => dispatch(fetchEvents())
});


export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);
