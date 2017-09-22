import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

class CalendarIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAllCalendars();
  }

  calendarView(){
    const date = new Date;
    const MONTHS = [ "Jan", "Feb", "Mar", "Apr",
              "May", "Jun", "July", "Aug",
            "Sep", "Oct", "Nov", "Dec"];
    if (Object.keys(this.props.calendars).length !== 0) {
      console.log("HERE", typeof date.getDate());
      return(
        <div>
          <div className="month">
            <h1>{MONTHS[date.getMonth()]}</h1>
            <h3>2017</h3>
          </div>
          <ul className="daysL">
            <li>Mon</li>
            <li>Tue</li>
            <li>Wed</li>
            <li>Thu</li>
            <li>Fri</li>
            <li>Sat</li>
            <li>Sun</li>
          </ul>
          <ul className="daysN">
          {Object.keys(this.props.calendars).map((indx) =>
            <li className={parseInt(indx) === date.getDate() ? "active" : ""}>
            {this.props.calendars[indx].day}
            <ul className="workouts-within">
              {this.props.calendars[indx].workouts.map((workout) =>
            workout.title ? <li>{`*${workout.title}`}</li> : <div></div>)}
            </ul>
            </li>)}
          </ul>
        </div>
      );
    }
  }

  render(){
    return(
      <div>
      {this.calendarView()}
    </div>);
  }
}

export default CalendarIndex;
  // Object.keys(this.props.calendars).map((indx) =>
  //   <li>{this.props.calendars[indx].day}</li>)
