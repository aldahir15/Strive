import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import EventCreateModal from './EventCreateModal';

class EventIndex extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.fetchEvents();
  }

  renderEvents(){
    if (this.props.events) {
      return(
        <ul>
          {Object.keys(this.props.events).map((indx) =>
            <li key={indx}>
              <img src={this.props.events[indx].image_url}/>
              <Link to={`events/${indx}`}>{this.props.events[indx].title}</Link>
              <p>
              {this.props.events[indx].calendar.day}
              </p>
            </li>)}
        </ul>
      );
    } else {
      return (<div></div>);
    }
  }

  render(){
    return(
      <div className="events-index">
        <h1>CONNECT</h1>
        <EventCreateModal />
        {this.renderEvents()}
      </div>
    );
  }
}

export default EventIndex;
