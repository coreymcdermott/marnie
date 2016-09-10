import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';
import { MARKETS } from '../actions';
import ImportEventsFileInput from '../components/ImportEventsFileInput';
import AddEventModal from '../components/AddEventModal.jsx';
import EventsTable from '../components/EventsTable';
import MarketFilter from '../components/MarketFilter';

const propTypes = {
  events: PropTypes.array.isRequired,
  market: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
};

class CalendarContainer extends Component {

  constructor(props) {
    super(props);
    this.getFilteredEvents = this.getFilteredEvents.bind(this);
  }

  getFilteredEvents() {
    const { events, market } = this.props;
    switch (market) {
    case 'G3_PLUS_C':
      return events.filter(event => MARKETS.G3_PLUS_C.indexOf(event.country) > -1);
    case 'HIGH_INCOME_EAST_ASIA':
      return events.filter(event => MARKETS.HIGH_INCOME_EAST_ASIA.indexOf(event.country) > -1);
    case 'MIDDLE_INCOME_EAST_ASIA':
      return events.filter(event => MARKETS.MIDDLE_INCOME_EAST_ASIA.indexOf(event.country) > -1);
    case 'ALL_EAST_ASIA':
      return events.filter(event => MARKETS.ALL_EAST_ASIA.indexOf(event.country) > -1);
    default:
      return events;
    }
  }

  render() {
    const { actions } = this.props;
    return (
      <div>
        <div id="eventHeader">
          <h1>Marnie</h1>
          <div className="form-inline">
            <ImportEventsFileInput handleImport={actions.importEvents} />
            <button className="btn btn-default" data-toggle="modal" data-target="#addEventModal">
              Add Event
            </button>
            <MarketFilter setMarketFilter={actions.setMarketFilter} />
          </div>
          <AddEventModal classID="#addEventModal" handleAdd={actions.addEvent} />
        </div>
        { this.getFilteredEvents().length === 0 &&
          <EventsTable events={this.getFilteredEvents()} handleDelete={actions.deleteEvent} />
        }
        { this.getFilteredEvents().length > 0 &&
          <EventsTable events={this.getFilteredEvents()} handleDelete={actions.deleteEvent} />
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { events, market } = state;
  return {
    events, market,
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) };
}

CalendarContainer.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContainer);
