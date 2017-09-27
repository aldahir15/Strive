import React from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

class EventShow extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.fetchEvent(this.props.match.params.eventId);
  }

  renderInfo(){
    if (this.props.events.title) {
      return(
        <div>
          {this.props.events.title}
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render(){
    console.log(this.props);
    return(
      <div>
        {this.renderInfo()}
      </div>
    );
  }

}

export default EventShow;
