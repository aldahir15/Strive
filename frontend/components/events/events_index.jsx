import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

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
              <p>{this.props.events[indx].title}</p>
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
        {this.renderEvents()}
      </div>
    );
  }
}

export default EventIndex;
