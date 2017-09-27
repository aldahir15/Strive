import { connect } from 'react-redux';
import EventCreate from './event_create_form';
import { fetchEvents, fetchEvent, createEvent, deleteEvent } from '../../actions/event_actions';
import {withRouter} from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    event: state.event
  };
};

const mapDispatchToProps = (dispatch) => ({
  createEvent: (event) => dispatch(createEvent(event))
});


export default connect(mapStateToProps, mapDispatchToProps)(EventCreate);
