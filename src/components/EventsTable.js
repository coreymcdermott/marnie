import React, { Component, PropTypes } from 'react'
import moment from 'moment'


class EventsTable extends Component {
  render() {
    let dates = [...new Set(this.props.events.map(event => event.date))];

    let rows = dates.map(date => {
      let events = this.props.events.filter(event => event.date === date);

      return events.map((event, index) => {
        let first = index === 0 ? (<td rowSpan={events.length} className='td-hack'>{ moment(event.date, "DD-MM-YYYY").format("dddd, Do MMMM") }</td>) : false;

        return (
          <tr key={event.UUID}>
            { first }
            <td>{event.country}</td>
            <td>{event.indicator}</td>
            <td>{event.period}</td>
            <td>{event.forecast}</td>
            <td>{event.actual}</td>
            <td>{event.time}</td>
            <td>
              <button className="btn btn-default m-right" onClick={() => this.props.handleEdit(event.uuid)}>Edit</button>
              <button className="btn btn-default" onClick={() => this.props.handleDelete(event.uuid)}>Delete</button>
            </td>
          </tr>
        )
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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { rows }
          </tbody>
        </table>
      </div>
    )
  }
}

export default EventsTable
