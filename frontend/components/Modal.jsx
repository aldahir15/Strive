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
    transform             : 'translate(-50%, -50%)',
    padding               : '0',
    width                 : '30%',
    'border-radius'       : '5px'
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
    const classN = this.props.action === SignInFormContainer ? "login-button" : "signup-button";
    return (
      <div>
        <a onClick={this.openModal} className={classN}>{text}</a>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <this.props.action text={text} closeModal={this.closeModal}/>
        </Modal>
      </div>
    );
  }
}

export default AppModal;
