import React, { Component, PropTypes } from 'react';
import UpdateEventForm from '../components/UpdateEventForm.jsx';

const propTypes = {
  visible: PropTypes.bool.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  event: PropTypes.object.isRequired,
};

class UpdateEventModal extends Component {
  render() {
    const { visible, handleUpdate, handleClose, event } = this.props;
    return (
      <div className={visible ? 'modal show' : 'modal fade'} role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" aria-label="Close" onClick={handleClose}>
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title">
                Update Event
              </h4>
            </div>
            <div className="modal-body">
              <UpdateEventForm
                initialValues={event}
                handleUpdate={handleUpdate}
                handleClose={handleClose}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UpdateEventModal.propTypes = propTypes;

export default UpdateEventModal;
