import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import SignInFormContainer from './session_form/signin_form_container';

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

class AppModal extends React.Component {
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
    const text = this.props.action === SignInFormContainer ? "Log In" : "Sign Up";
    const classN = this.props.action === SignInFormContainer ? "myButton" : "signup-button";
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

          <this.props.action />
        </Modal>
      </div>
    );
  }
}

export default AppModal;
