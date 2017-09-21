import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

class Calendar extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    const day = new Date;
    this.props.fetchCalendar(day.getDate());
  }

  dayOfWeek(){
    const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday", "Sunday"];
    const today = new Date;
    return DAYS[today.getDay()];
  }

  workouts(){
    if (this.props.day.workouts) {
      return(
        <ul className="home-workouts">
          {this.props.day.workouts.map((workout) =>
            <li>{`${workout.time} ${workout.dayornight}: ${workout.title}`}</li>)}
        </ul>
      );
    }
  }

  render(){
    return(
      <div className="home-calendar">
        <h3>{this.dayOfWeek()}</h3>
        {this.workouts()}
      </div>
    );
  }
}

export default Calendar;
