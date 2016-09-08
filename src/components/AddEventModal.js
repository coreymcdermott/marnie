import React, { Component, PropTypes } from 'react'
import AddEventForm from '../components/AddEventForm'

class AddEventModal extends Component {
  render() {
    const { handleAdd } = this.props;
    return (
      <div className="modal fade" id="addEventModal" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title">
                Add Event
              </h4>
            </div>
            <div className="modal-body">
              <AddEventForm handleAdd={handleAdd}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddEventModal
