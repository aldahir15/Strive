import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import {fetchQuote} from '../../util/quote_api_util';
import WorkoutCreateModal from '../workouts/WorkoutCreateModal';
import WorkoutCreateFormContainer from '../workouts/workout_create_form_container';
import { Parallax } from 'react-parallax';
import ProgressBar from 'react-progressbar.js';

class Calendar extends React.Component {

  constructor(props){
    super(props);
    this.state = {quote: "", currentDate: ""};
    this.day = {};
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
    this.props.fetchAllCalendars();
    this.getQuote();
    this.props.fetchPaths();
    this.props.fetchWorkouts();
  }

  dayOfWeek(){
    const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday", "Sunday"];
    const today = new Date;
    return DAYS[today.getDay()];
  }

  getQuote(){
    fetchQuote().then((result) => {
      this.setState({quote: result.quote});
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
    const day = new Date;
    if (this.props.calendar[1]) {
      this.day = this.props.calendar[day.getDate()];
      this.day.workouts.map((workout) => {
        const fulltime = `${workout.time} ${workout.dayornight}`;
        if (nums.includes(fulltime)) {
          const sentence = `${workout.time} ${workout.dayornight}:  ${workout.title}`;
          nums[nums.indexOf(fulltime)] =
          <Link to={`workouts/${workout.id}`} key={workout.id}>{sentence}</Link>;
        }
      });
    }
    return nums.map((num) => (
      <li key={nums.indexOf(num)}>{num}</li>
    ));
  }

  render(){
    const day = new Date;
    console.log(this.props);
    let workoutAmt = '0 Workouts';
    let eventAmt = '0 Events';
    if ( Object.keys(this.props.workouts).length > 1) {
       workoutAmt = `${Object.keys(this.props.workouts).length} Workouts`;
       eventAmt = `${this.props.user.events.length} Events`;
    }
    const Circle = ProgressBar.Circle;
    const options = {
        strokeWidth: 5,
        color: '#fc4c02',
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
    };
    const containerStyle = {
          width: '200px',
          height: '200px',
          top: '150px',
          position: 'relative',
          left: '5%'
      };
    const workoutProgress = workoutAmt[0] === '0' ? 0.01 : 1;
    const eventProgress = eventAmt[0] === '0' ? 0.01 : 1;
    return(
      <div className="home-container">
        <Parallax strength={400} className="home">
          <div className="day-calendar-container">
            <h1 className="day-of-week">{this.dayOfWeek().toUpperCase()}</h1>
            <div className="home-calendar">
              <div className="create-workout-calendar">
                <h3>{this.state.currentDate}</h3>
                <WorkoutCreateModal action={WorkoutCreateFormContainer}
                  calendar={this.props.calendar} paths={this.props.path}/>
              </div>
              <ul className="time-calendar">
                {this.workouts()}
              </ul>
            </div>
          </div>
          <div className="quote-progress-div">
            {this.renderQuote()}
            <div className="progress-div">
              <Circle
                progress={workoutProgress}
                text={workoutAmt}
                options={options}
                initialAnimate={true}
                containerStyle={containerStyle}
                containerClassName={'.progressbar'}
              />
              <Circle
                progress={eventProgress}
                text={eventAmt}
                options={options}
                initialAnimate={true}
                containerStyle={containerStyle}
                containerClassName={'.progressbar'}
              />
            </div>
          </div>
        </Parallax>
      </div>
    );
  }
}
// this.workouts()

export default Calendar;
