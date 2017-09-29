import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Parallax } from 'react-parallax';
import EventShowMap from './EventShowMap';

class EventShow extends React.Component {
  constructor(props){
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidMount(){
    this.props.fetchEvents();
    this.props.fetchUserEvents();
  }

  handleAdd(){
    if (Object.keys(this.props.userEvents).includes(this.props.match.params.eventId)) {

    } else {
      this.props.createUserEvent({event_id: this.props.match.params.eventId});
      location.reload();
    }
  }

  renderInfo(){
    if (Object.keys(this.props.events).length > 1) {
      const event = this.props.events[this.props.match.params.eventId];
      return(
        <div className="event-show">
        <Parallax bgImage={event.image_url} strength={1900} className="event-parallax">
          <div className="event-title-plus">
            <h1>{event.title}</h1>
            <div>
              <a className={Object.keys(this.props.userEvents).includes(this.props.match.params.eventId) ? "shadow"  : "event-plus-form"}
                onClick={this.handleAdd}>
                {Object.keys(this.props.userEvents).includes(this.props.match.params.eventId) ? "Already in Calendar" : "Add To Calendar"}</a>
            </div>
          </div>
        </Parallax>
        <div className="event-show-info">
        <h4>Description:</h4>
        <p>{event.description}</p>
        <h4>Date: </h4>
        <p>{event.calendar.month}/{event.calendar.day}/{event.calendar.year}</p>
        {event.lat ? <EventShowMap event={event}/> : <div></div>}
        </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render(){
    console.log(this.props);
    return(
      <div>
        {this.renderInfo()}
      </div>
    );
  }

}

export default EventShow;
