import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import uuid from 'uuid';
import {
  CREATE_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  IMPORT_EVENTS,
  SET_MARKET_FILTER,
  SET_PERIOD_FILTER,
  OPEN_CREATE_EVENT_MODAL,
  CLOSE_CREATE_EVENT_MODAL,
  OPEN_UPDATE_EVENT_MODAL,
  CLOSE_UPDATE_EVENT_MODAL,
} from './actions';

function events(state = [], action) {
  switch (action.type) {
  case CREATE_EVENT:
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
  case UPDATE_EVENT:
    return state.map(event => {
      if (action.uuid === event.uuid) {
        return {
          uuid:      action.uuid,
          date:      action.date,
          country:   action.country,
          indicator: action.indicator,
          period:    action.period,
          forecast:  action.forecast,
          actual:    action.actual,
          time:      action.time,
        }
      }
      return event;
    });
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

function createEventModal(state = { visible: false }, action) {
  switch (action.type) {
  case OPEN_CREATE_EVENT_MODAL:
    return {
      visible: true,
    };
  case CLOSE_CREATE_EVENT_MODAL:
    return {
      visible: false,
    };
  default:
    return state;
  }
}

function updateEventModal(state = { visible: false, event: null }, action) {
  switch (action.type) {
  case OPEN_UPDATE_EVENT_MODAL:
    return {
      visible: true,
      event: action.event,
    };
  case CLOSE_UPDATE_EVENT_MODAL:
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
  createEventModal,
  updateEventModal,
  form,
});

export default rootReducer;
