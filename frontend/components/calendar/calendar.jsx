import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

class Calendar extends React.Component {

  constructor(props){
    super(props);
  }

  componentWillMount(){
    const day = new Date;
    this.props.fetchCalendar(day.getDate());
  }

  dayOfWeek(){
    const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday", "Sunday"];
    const today = new Date;
    return DAYS[today.getDay()];
  }

  render(){
    console.log("DAY", this.props);
    console.log("TODAY IS", this.dayOfWeek());
    return(
      <div>
        {this.dayOfWeek()}
        {this.props.day.workouts}
      </div>
    );
  }
}

export default Calendar;
