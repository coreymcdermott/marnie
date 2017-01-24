import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import datepicker from 'bootstrap-datepicker';
import DatePicker from 'bootstrap-datepicker/dist/css/bootstrap-datepicker3.css';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

class UpdateEventForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    const { handleUpdate, handleClose } = this.props;
    handleUpdate(
      values.uuid,
      values.date,
      values.country,
      values.indicator,
      values.period,
      values.forecast,
      values.actual,
      values.time
    );
    handleClose();
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="form-horizontal" onSubmit={handleSubmit(this.onSubmit)}>
        <div className="form-group">
          <label className="col-sm-2 control-label" htmlFor="date">Date</label>
          <div className="col-sm-10">
            <div className="input-group date" data-provide="datepicker">
              <Field className="form-control" name="date" component="input" type="text" />
              <div className="input-group-addon">
                <span className="glyphicon glyphicon-th" />
              </div>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label" htmlFor="country">Country</label>
          <div className="col-sm-10">
            <Field className="form-control" name="country" component="input" type="text" />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label" htmlFor="indicator">
            Indicator
          </label>
          <div className="col-sm-10">
            <Field className="form-control" name="indicator" component="input" type="text" />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label" htmlFor="period">Period</label>
          <div className="col-sm-10">
            <Field className="form-control" name="period" component="input" type="text" />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label" htmlFor="forecast">Forcast</label>
          <div className="col-sm-10">
            <Field className="form-control" name="forecast" component="input" type="text" />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label" htmlFor="actual">Actual</label>
          <div className="col-sm-10">
            <Field className="form-control" name="actual" component="input" type="text" />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label" htmlFor="time">Time</label>
          <div className="col-sm-10">
            <Field className="form-control" name="time" component="input" type="text" />
          </div>
        </div>
        <div className="clear-fix hack">
          <button type="submit" className="btn btn-default pull-right">Update Event</button>
        </div>
      </form>
    );
  }
}

UpdateEventForm.propTypes = propTypes;

export default reduxForm({
  form: 'updateEventForm',
  enableReinitialize: true,
})(UpdateEventForm);
