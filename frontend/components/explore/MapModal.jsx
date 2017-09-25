import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import MapShow from '../map/map_show';

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

class PathCreateModal extends React.Component {
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
    const classN = "path-show";
    const workout = {
      path: this.props.path
    };
    return (
      <div>
        <button onClick={this.openModal} className={classN}>
          {this.props.path.title}
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <MapShow workout={workout}/>
        </Modal>
      </div>
    );
  }
}

export default PathCreateModal;
