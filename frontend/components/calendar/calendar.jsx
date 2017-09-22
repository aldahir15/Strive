import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import {fetchQuote} from '../../util/quote_api_util';
import WorkoutCreateModal from '../workouts/WorkoutCreateModal';
import WorkoutCreateFormContainer from '../workouts/workout_create_form_container';


class Calendar extends React.Component {

  constructor(props){
    super(props);
    this.state = {quote: "", currentDate: ""};
  }

  componentDidMount(){
    const day = new Date;
    const currDay = day.getDate();
    const MONTHS = [ "Jan", "Feb", "Mar", "Apr",
	   			    "May", "Jun", "July", "Aug",
				    "Sep", "Oct", "Nov", "Dec"];
    const currMonth = MONTHS[day.getMonth()];
    const currYear = day.getFullYear();
    this.setState({currentDate: `${currMonth} ${currDay}, ${currYear}`});
    this.props.fetchCalendar(day.getDate());
    this.getQuote();
  }

  dayOfWeek(){
    const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday", "Sunday"];
    const today = new Date;
    return DAYS[today.getDay()];
  }

  getQuote(){
    fetchQuote().then((result) => {
      this.setState({quote: result.contents.quotes[0].quote});
    });
  }

  renderQuote(){
    return(
      <div className="quote-div">
        <h3>Quote of the day: </h3>
        <h1>{this.state.quote}</h1>
      </div>
    );
  }

  workouts(){
    const nums = ["9 AM","10 AM","11 AM","12 PM","1 PM","2 PM","3 PM",
    "4 PM","5 PM","6 PM","7 PM","8 PM","9 PM"];
    if (this.props.day.workouts) {
      this.props.day.workouts.map((workout) => {
        const fulltime = `${workout.time} ${workout.dayornight}`;
        if (nums.includes(fulltime)) {
          const sentence = `${workout.time} ${workout.dayornight}:  ${workout.title}`;
          nums[nums.indexOf(fulltime)] =
          <Link to={`workouts/${workout.id}`} key={workout.id}>{sentence}</Link>;
        }
      });
    }
    return nums.map((num) => (
      <li key={num}>{num}</li>
    ));
  }

  render(){
    return(
      <div className="home">
        <div className="day-calendar-container">
          <h1 className="day-of-week">{this.dayOfWeek().toUpperCase()}</h1>
          <div className="home-calendar">
            <div className="create-workout-calendar">
              <h3>{this.state.currentDate}</h3>
              <WorkoutCreateModal action={WorkoutCreateFormContainer} calendar={this.props.day}/>
            </div>
            <ul className="time-calendar">
              {this.workouts()}
            </ul>
          </div>
        </div>
        {this.renderQuote()}
      </div>
    );
  }
}
// this.workouts()

export default Calendar;
