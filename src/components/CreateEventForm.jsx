import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import 'react-widgets/lib/less/react-widgets.less';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import Moment from 'moment';
import momentLocalizer from 'react-widgets/lib/localizers/moment';


momentLocalizer(Moment);

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

class CreateEventForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(values) {
    const { handleCreate, handleClose } = this.props;
    handleCreate(
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
            <Field
              name="date"
              className="form-control"
              type="text"
              component={({ input: { onChange, value } }) =>
                <DateTimePicker
                  onChange={onChange}
                  format="DD/MM/YYYY"
                  time={false}
                  value={value && new Date(value) || null}
                />
              }
            />
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
          <button type="submit" className="btn btn-default pull-right">Create Event</button>
        </div>
      </form>
    );
  }
}

CreateEventForm.propTypes = propTypes;

export default reduxForm({
  form: 'createEventForm',
})(CreateEventForm);
