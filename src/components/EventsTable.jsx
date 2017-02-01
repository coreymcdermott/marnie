import React, { Component, PropTypes } from 'react';
import moment from 'moment';

const propTypes = {
  events: PropTypes.array.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

class EventsTable extends Component {
  render() {
    const dates = [...new Set(this.props.events.map(event => event.date))];

    const rows = dates.map(date => {
      const events = this.props.events.filter(event => event.date === date);

      return events.map((event, index) => {
        const first = index === 0 ? (<td rowSpan={events.length} className="td-hack">{ moment(event.date, 'DD/MM/YY').format('dddd, Do MMMM') }</td>) : false;

        return (
          <tr key={event.UUID}>
            { first }
            <td>{event.country}</td>
            <td>{event.indicator}</td>
            <td>{event.period}</td>
            <td>{event.forecast}</td>
            <td>{event.actual}</td>
            <td>{event.time}</td>
            <td className="hidden-print">
              <button
                className="btn btn-default m-right"
                onClick={() => this.props.handleUpdate(event)}
              >
                Update
              </button>
              <button
                className="btn btn-default"
                onClick={() => this.props.handleDelete(event.uuid)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      });
    });

    return (
      <div id="event-table">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Release Date</th>
              <th>Country</th>
              <th>Economic Indicator</th>
              <th>Period</th>
              <th>Market Forecast</th>
              <th>Actual</th>
              <th>Time</th>
              <th className="hidden-print">Actions</th>
            </tr>
          </thead>
          <tbody>
            { rows }
          </tbody>
        </table>
      </div>
    );
  }
}

EventsTable.propTypes = propTypes;

export default EventsTable;
