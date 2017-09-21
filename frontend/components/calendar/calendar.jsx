import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import {fetchQuote} from '../../util/quote_api_util';

class Calendar extends React.Component {

  constructor(props){
    super(props);
    this.state = {quote: ""};
  }

  componentDidMount(){
    const day = new Date;
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
          nums[nums.indexOf(fulltime)] =
          `${workout.time} ${workout.dayornight}:  ${workout.title}`;
        }
      });
    }
    return nums.map((num) => (<li>{num}</li>));
  }

  render(){
    return(
      <div className="home">
        <div className="home-calendar">
          <h3>{this.dayOfWeek()}</h3>
          <ul className="time-calendar">
            {this.workouts()}
          </ul>
        </div>
        {this.renderQuote()}
      </div>
    );
  }
}
// this.workouts()

export default Calendar;
