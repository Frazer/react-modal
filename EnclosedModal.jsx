import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';
import Modal  from './Modal.jsx';

export default class EnclosedModal extends Component {

  constructor(props) {
    super(props);  
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({
      isOpen: true,
    });
  }

  closeModal() {
    this.setState({
      isOpen: false,
    });
  }

  render () {
      return (
        <div>
          <button onClick={ this.openModal }  className={ this.props.openButtonClassName}> 
            { this.props.openButtonText ? this.props.openButtonText:"Open Enclosed Modal"}
          </button>
          
          
          <Modal
            isOpen={ this.state.isOpen }
            close={ this.closeModal }
            title={ this.props.title}
            shouldCloseOnOverlayClick= {this.props.shouldCloseOnOverlayClick}>
            <p>{ this.props.text}</p>
            <button onClick={ this.closeModal }>Click Here to Close</button>
          </Modal>
        
        </div>
      );
  }
};
