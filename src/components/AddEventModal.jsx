import React, { Component, PropTypes } from 'react';
import AddEventForm from '../components/AddEventForm.jsx';

const propTypes = {
  visible: PropTypes.bool.isRequired,
  handleAdd: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

class AddEventModal extends Component {
  render() {
    const { visible, handleAdd, handleClose } = this.props;
    return (
      <div className={visible ? 'modal show' : 'modal fade'} id="addEventModal" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" aria-label="Close" onClick={handleClose}>
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title">
                Add Event
              </h4>
            </div>
            <div className="modal-body">
              <AddEventForm handleAdd={handleAdd} handleClose={handleClose} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddEventModal.propTypes = propTypes;

export default AddEventModal;
