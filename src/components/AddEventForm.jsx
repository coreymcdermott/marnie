import React, { Component, PropTypes } from 'react';
import datepicker from 'bootstrap-datepicker';
import DatePicker from 'bootstrap-datepicker/dist/css/bootstrap-datepicker3.css';

const propTypes = {
  handleAdd: PropTypes.func.isRequired,
};

class AddEventForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const { handleAdd } = this.props;
    handleAdd(
      document.getElementById('inputDate').value,
      document.getElementById('inputCountry').value,
      document.getElementById('inputIndicator').value,
      document.getElementById('inputPeriod').value,
      document.getElementById('inputForecast').value,
      document.getElementById('inputActual').value,
      document.getElementById('inputTime').value
    );
    document.getElementById('addEventModal').modal('hide');
  }

  render() {
    return (
      <form className="form-horizontal" id="AddEventForm" onSubmit={this.onSubmit}>
        <div className="form-group">
          <label className="col-sm-2 control-label">Date</label>
          <div className="col-sm-10">
            <div className="input-group date" data-provide="datepicker">
              <input type="text" className="form-control" id="inputDate" placeholder="" />
                <div className="input-group-addon">
                  <span className="glyphicon glyphicon-th" />
                </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label">Country</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputCountry" placeholder="" />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label">Indicator</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputIndicator" placeholder="" />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label">Period</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputPeriod" placeholder="" />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label">Forcast</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputForecast" placeholder="" />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label">Actual</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputActual" placeholder="" />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label">Time</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputTime" placeholder="" />
          </div>
        </div>
        <div className="clear-fix hack">
          <button type="submit" className="btn btn-default pull-right">Add Event</button>
        </div>
      </form>
    );
  }
}

AddEventForm.propTypes = propTypes;

export default AddEventForm;
