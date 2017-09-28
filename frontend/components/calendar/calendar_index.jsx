import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

class CalendarIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAllCalendars();
    this.props.fetchUserEvents();
  }

  calendarView(){
    console.log("HEE", this.props.userEvents[6]);
    const date = new Date;
    let offset = ((date.getDay() + 6 % 7) - date.getDay() - 2);
    let newArr = [];
    const endingLastMonth = new Date(2017, date.getMonth(), 0).getDate();
    for (let i = 0; i < offset; i++) {
      newArr.push(endingLastMonth-i);
    }
    newArr = newArr.reverse();
    const MONTHS = [ "January", "Feburary", "March", "April",
              "May", "June", "July", "August",
            "September", "October", "November", "December"];
    if (Object.keys(this.props.calendars).length > 20) {
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
          {newArr.map((day) =>
            <li className="last-month-days">{day}</li>)}
          {Object.keys(this.props.calendars).map((indx) =>
            <li key={indx} className={parseInt(indx) === date.getDate() ? "active" : ""}>
            {this.props.calendars[indx].day}
            <ul className="workouts-within">
              {this.props.calendars[indx].workouts.map((workout) =>
              workout.title ? <li key={workout.id}><Link to={`workouts/${workout.id}`}>
                {`${workout.time}${workout.dayornight}: ${workout.title}`}
                </Link></li> : <div></div>)}
              {Object.keys(this.props.userEvents).map((userEventIndx) =>
                this.props.userEvents[userEventIndx].event.day == indx ?
                <li key={this.props.userEvents[userEventIndx].event_id}><Link to={`events/${this.props.userEvents[userEventIndx].event_id}`}>
                  {`Event: ${this.props.userEvents[userEventIndx].event.title}`}
                  </Link></li> : <div></div>)}
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
