import React, { Component, PropTypes } from 'react';
import datepicker from 'bootstrap-datepicker';
import DatePicker from 'bootstrap-datepicker/dist/css/bootstrap-datepicker3.css';

const propTypes = {
  handleCreate: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

class CreateEventForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const { handleCreate, handleClose } = this.props;
    handleCreate(
      document.getElementById('inputDate').value,
      document.getElementById('inputCountry').value,
      document.getElementById('inputIndicator').value,
      document.getElementById('inputPeriod').value,
      document.getElementById('inputForecast').value,
      document.getElementById('inputActual').value,
      document.getElementById('inputTime').value
    );
    handleClose();
  }

  render() {
    return (
      <form className="form-horizontal" id="CreateEventForm" onSubmit={this.onSubmit}>
        <div className="form-group">
          <label className="col-sm-2 control-label" htmlFor="inputDate">Date</label>
          <div className="col-sm-10">
            <div className="input-group date" data-provide="datepicker">
              <input type="text" className="form-control" id="inputDate" />
              <div className="input-group-addon">
                <span className="glyphicon glyphicon-th" />
              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label" htmlFor="inputCountry">Country</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputCountry" />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label" htmlFor="inputIndicator">
            Indicator
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputIndicator" />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label" htmlFor="inputPeriod">Period</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputPeriod" />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label" htmlFor="inputForecast">Forcast</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputForecast" />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label" htmlFor="inputActual">Actual</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputActual" />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label" htmlFor="inputTime">Time</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputTime" />
          </div>
        </div>
        <div className="clear-fix hack">
          <button type="submit" className="btn btn-default pull-right">Create Event</button>
        </div>
      </form>
    );
  }
}

CreateEventForm.propTypes = propTypes;

export default CreateEventForm;
