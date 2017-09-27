import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Parallax } from 'react-parallax';

class EventShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchEvents();
  }

  renderInfo(){
    if (Object.keys(this.props.events).length > 1) {
      const event = this.props.events[this.props.match.params.eventId];
      return(
        <div className="event-show">
        <Parallax bgImage={event.image_url} strength={1900} className="event-parallax">
        <h1>{event.title}</h1>
        </Parallax>
        <div className="event-show-info">
        <h4>Description:</h4>
        <p>{event.description}</p>
        <h4>Date: </h4>
        <p>{event.calendar.month}/{event.calendar.day}/{event.calendar.year}</p>
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
