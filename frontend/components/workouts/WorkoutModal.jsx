import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import WorkoutUpdateFormContainer from './workout_update_form_container';
import { Link } from 'react-router-dom';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    overflow              : 'none',
    transform             : 'translate(-50%, -50%)',
    padding               : '0',
    width                 : '30%',
    'borderRadius'        : '5px'
  }
};

class WorkoutModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {

  }

  closeModal() {
    this.setState({modalIsOpen: false});

  }

  render() {
    const text = this.props.action === WorkoutUpdateFormContainer ? "Update Workout" : "+";
    const classN = this.props.action === WorkoutUpdateFormContainer ? "workout-form" : "plus-form";
    return (
      <div>
        <button onClick={this.openModal} className={classN}>{text}</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <this.props.action text={text}/>
        </Modal>
      </div>
    );
  }
}

export default WorkoutModal;
