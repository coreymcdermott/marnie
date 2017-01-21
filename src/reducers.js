import { combineReducers } from 'redux';
import uuid from 'uuid';
import {
  ADD_EVENT,
  DELETE_EVENT,
  IMPORT_EVENTS,
  SET_MARKET_FILTER,
  SET_PERIOD_FILTER,
  OPEN_ADD_EVENT_MODAL,
  CLOSE_ADD_EVENT_MODAL,
} from './actions';

function events(state = [], action) {
  switch (action.type) {
  case ADD_EVENT:
    return [
      ...state,
      {
        uuid:      uuid.v4(),
        date:      action.date,
        country:   action.country,
        indicator: action.indicator,
        period:    action.period,
        forecast:  action.forecast,
        actual:    action.actual,
        time:      action.time,
      },
    ];
  case DELETE_EVENT:
    return state.filter(event => event.uuid !== action.uuid);
  case IMPORT_EVENTS:
    return action.events;
  default:
    return state;
  }
}

function market(state = 'ALL', action) {
  switch (action.type) {
  case SET_MARKET_FILTER:
    return action.filter;
  default:
    return state;
  }
}

function period(state = 'ALL', action) {
  switch (action.type) {
  case SET_PERIOD_FILTER:
    return action.filter;
  default:
    return state;
  }
}

function addEventModal(state = { visible: false }, action) {
  switch (action.type) {
  case 'OPEN_ADD_EVENT_MODAL':
    return {
      visible: true,
    };
  case 'CLOSE_ADD_EVENT_MODAL':
    return {
      visible: false,
    };
  default:
    return state;
  }
}

const rootReducer = combineReducers({
  events,
  market,
  period,
  addEventModal,
});

export default rootReducer;
