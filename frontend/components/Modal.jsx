import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import SignInFormContainer from './session_form/signin_form_container';
import SignupFormContainer from './session_form/signup_form_container';
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
    let text;
    let classN;
    let user;
    if (this.props.demo) {
      text = "Demo Log In";
      classN = "login-button";
      user = {username: "demo", password: "password"};
    }
    else if (this.props.action === SignInFormContainer) {
      text = "Log In";
      classN = "login-button";
      user = {username: "", password: ""};
    } else if (this.props.action === SignupFormContainer) {
      text =  "Sign Up";
      classN = "signup-button";
      user = {username: "", password: ""};
    }
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

          <this.props.action text={text} closeModal={this.closeModal} user={user}/>
        </Modal>
      </div>
    );
  }
}

export default AppModal;
