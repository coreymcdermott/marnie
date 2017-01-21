import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import * as actionCreators from '../actions';
import { MARKETS } from '../actions';
import ImportEventsFileInput from '../components/ImportEventsFileInput.jsx';
import CreateEventModal from '../components/CreateEventModal.jsx';
import EventsTable from '../components/EventsTable.jsx';
import MarketFilter from '../components/MarketFilter.jsx';
import PeriodFilter from '../components/PeriodFilter.jsx';


const propTypes = {
  events: PropTypes.array.isRequired,
  market: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
  createEventModal: PropTypes.object.isRequired,
};

class CalendarContainer extends Component {

  constructor(props) {
    super(props);
    this.getFilteredEvents = this.getFilteredEvents.bind(this);
  }

  getFilteredEvents() {
    const { events, market, period } = this.props;

    let filteredEvents = events;
    let start = null;
    let end = null;

    switch (market) {
    case 'G3_PLUS_C':
      filteredEvents = filteredEvents.filter(event => MARKETS.G3_PLUS_C.indexOf(event.country) > -1);
      break;
    case 'HIGH_INCOME_EAST_ASIA':
      filteredEvents = filteredEvents.filter(event => MARKETS.HIGH_INCOME_EAST_ASIA.indexOf(event.country) > -1);
      break;
    case 'MIDDLE_INCOME_EAST_ASIA':
      filteredEvents = filteredEvents.filter(event => MARKETS.MIDDLE_INCOME_EAST_ASIA.indexOf(event.country) > -1);
      break;
    case 'ALL_EAST_ASIA':
      filteredEvents = filteredEvents.filter(event => MARKETS.ALL_EAST_ASIA.indexOf(event.country) > -1);
      break;
    default:
      break;
    }

    switch (period) {
    case 'THIS_FORTNIGHT':
      start = moment().day(1);
      end = moment().day(14);
      filteredEvents = filteredEvents.filter(event => moment(event.date).isBetween(start, end, 'day', '[]'));
      break;
    case 'NEXT_FORTNIGHT':
      start = moment().day(7);
      end = moment().day(21);
      filteredEvents = filteredEvents.filter(event => moment(event.date).isBetween(start, end, 'day', '[]'));
      break;
    default:
      break;
    }

    return filteredEvents;
  }

  render() {
    const { actions, createEventModal } = this.props;
    return (
      <div>
        <div id="eventHeader">
          <h1 className="hidden-print">Marnie</h1>
          <div className="form-inline">
            <ImportEventsFileInput handleImport={actions.importEvents} />
            <button className="btn btn-default hidden-print" onClick={actions.openCreateEventModal}>
              Create Event
            </button>
            <MarketFilter setMarketFilter={actions.setMarketFilter} />
            <PeriodFilter setPeriodFilter={actions.setPeriodFilter} />
          </div>
          <CreateEventModal
            handleCreate={actions.createEvent}
            handleClose={actions.closeCreateEventModal}
            visible={createEventModal.visible}
          />
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
  const { events, market, period, createEventModal } = state;
  return {
    events, market, period, createEventModal,
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) };
}

CalendarContainer.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContainer);
