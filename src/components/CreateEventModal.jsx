import React, { Component, PropTypes } from 'react';
import CreateEventForm from '../components/CreateEventForm.jsx';

const propTypes = {
  visible: PropTypes.bool.isRequired,
  handleCreate: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

class CreateEventModal extends Component {
  render() {
    const { visible, handleCreate, handleClose } = this.props;
    return (
      <div className={visible ? 'modal show' : 'modal fade'} role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" aria-label="Close" onClick={handleClose}>
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title">
                Create Event
              </h4>
            </div>
            <div className="modal-body">
              <CreateEventForm handleCreate={handleCreate} handleClose={handleClose} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateEventModal.propTypes = propTypes;

export default CreateEventModal;
