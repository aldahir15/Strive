import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import WorkoutCreateFormContainer from './workout_create_form_container';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    overflow              : 'none',
    transform             : 'translate(-50%, -50%)'
  }
};

class WorkoutCreateModal extends React.Component {
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
    const text = "+";
    const classN = "plus-form";
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

          <WorkoutCreateFormContainer text={text} day={this.props.day}
          paths={this.props.paths}/>
        </Modal>
      </div>
    );
  }
}

export default WorkoutCreateModal;
