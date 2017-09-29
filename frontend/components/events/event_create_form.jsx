import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import EventMap from './EventMap';

class EventCreate extends React.Component {
  constructor(props){
    super(props);
    this.handleDate = this.handleDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleMap = this.handleMap.bind(this);
    this.setState = this.setState.bind(this);
    this.state = {title: "", description: "",
                  calendar_id: 0, image_url: "",
                  day: 0, month: 0, year: 0, lat: 0, lng: 0};
  }

  update(field){
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  componentDidMount(){
    this.props.fetchAllCalendars();
  }

  handleDate(e){
    const year = parseInt(e.target.value.slice(0,4));
    const month = parseInt(e.target.value.slice(5,7));
    const day = parseInt(e.target.value.slice(8,10));
    this.setState({day, month, year});
    let calendarId;
    this.setState({calendar_id: this.props.calendars[day].id});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createEvent(this.state);
    location.reload();
  }

  render(){
    return(
      <div className="update-form">
        <h1>Create An Event</h1>
        <form onSubmit={this.handleSubmit} className="event-map-form">
          <label>Title:
            <input type="text" onChange={this.update("title")} value={this.state.title} />
          </label>

          <label>Description:
            <textarea onChange={this.update("description")} value={this.state.description} />
          </label>

          <label>Description:
            <input type="date" onChange={this.handleDate} />
          </label>

          <label>Image URL:
            <input type="text" onChange={this.update("image_url")} value={this.state.image_url} />
          </label>


          <EventMap currState={this.state} onClick={this.handleMap} parentSetState={this.setState} />
          <input className="submit-update-2" type="submit" value="Create Event" />
        </form>
      </div>
    );
  }

}

export default EventCreate;
