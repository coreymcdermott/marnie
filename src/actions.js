import XLSX from 'xlsx';
import uuid from 'uuid';

export const CREATE_EVENT             = 'CREATE_EVENT';
export const UPDATE_EVENT             = 'UPDATE_EVENT';
export const DELETE_EVENT             = 'DELETE_EVENT';
export const IMPORT_EVENTS            = 'IMPORT_EVENTS';
export const SET_MARKET_FILTER        = 'SET_MARKET_FILTER';
export const SET_PERIOD_FILTER        = 'SET_PERIOD_FILTER';
export const OPEN_CREATE_EVENT_MODAL  = 'OPEN_CREATE_EVENT_MODAL';
export const CLOSE_CREATE_EVENT_MODAL = 'CLOSE_CREATE_EVENT_MODAL';
export const OPEN_UPDATE_EVENT_MODAL  = 'OPEN_UPDATE_EVENT_MODAL';
export const CLOSE_UPDATE_EVENT_MODAL = 'CLOSE_UPDATE_EVENT_MODAL';

export const MARKETS = {
  G3_PLUS_C: [
    'United States',
    'United Kingdom',
    'China',
  ],
  HIGH_INCOME_EAST_ASIA: [
    'Australia',
    'Brunei Darussalam',
    'French Polynesia',
    'Guam',
    'Hong Kong',
    'Japan',
    'South Korea',
    'Macao',
    'Nauru',
    'New Caledonia',
    'New Zealand',
    'Northern Mariana Islands',
    'Singapore',
    'Taiwan',
  ],
  MIDDLE_INCOME_EAST_ASIA: [
    'American Samoa',
    'Cambodia',
    'China',
    'Fiji',
    'Indonesia',
    'Kiribati',
    'Lao',
    'Malaysia',
    'Marshall Islands',
    'Micronesia',
    'Mongolia',
    'Myanmar',
    'Palau',
    'Papua New Guinea',
    'Philippines',
    'Samoa',
    'Solomon Islands',
    'Thailand',
    'Timor-Leste',
    'Tonga',
    'Tuvalu',
    'Vanuatu',
    'Vietnam',
  ],
  ALL_EAST_ASIA: [
    'American Samoa',
    'Australia',
    'Brunei Darussalam',
    'Cambodia',
    'China',
    'Fiji',
    'French Polynesia',
    'Guam',
    'Hong Kong',
    'Indonesia',
    'Japan',
    'Kiribati',
    'South Korea',
    'Lao',
    'Macao',
    'Malaysia',
    'Marshall Islands',
    'Micronesia',
    'Mongolia',
    'Myanmar',
    'Nauru',
    'New Caledonia',
    'New Zealand',
    'Northern Mariana Islands',
    'Palau',
    'Papua New Guinea',
    'Philippines',
    'Samoa',
    'Singapore',
    'Solomon Islands',
    'Taiwan, China',
    'Thailand',
    'Timor-Leste',
    'Tonga',
    'Tuvalu',
    'Vanuatu',
    'Vietnam',
  ],
};

export function createEvent(
  date,
  country,
  indicator,
  period,
  forecast,
  actual,
  time
) {
  return {
    type:      CREATE_EVENT,
    date:      date,
    country:   country,
    indicator: indicator,
    period:    period,
    forecast:  forecast,
    actual:    actual,
    time:      time,
  };
}

export function updateEvent(
  uuid,
  date,
  country,
  indicator,
  period,
  forecast,
  actual,
  time
) {
  return {
    type:      UPDATE_EVENT,
    uuid:      uuid,
    date:      date,
    country:   country,
    indicator: indicator,
    period:    period,
    forecast:  forecast,
    actual:    actual,
    time:      time,
  };
}

export function deleteEvent(uuid) {
  return {
    type: DELETE_EVENT,
    uuid,
  };
}

export function importEvents(data) {
  const workbook  = XLSX.read(data, { type: 'binary' });
  let worksheet = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
  let events = [];

  // Filter out trailer row.
  worksheet = worksheet.filter(event => !event.Date.startsWith('Download time'));

  worksheet.map(event => {
    events.push({
      uuid:      uuid.v4(),
      date:      event['Date'],
      country:   event['Country'],
      indicator: event['Event'],
      period:    event['Period'],
      forecast:  event['Surv(M)'] === '--' ? '' : event['Surv(M)'],
      actual:    event['Actual']  === '--' ? '' : event['Actual'],
      time:      event['Time'],
    });
  });

  return {
    type: IMPORT_EVENTS,
    events: events,
  };
}

export function setMarketFilter(filter) {
  return {
    type: SET_MARKET_FILTER,
    filter,
  };
}

export function setPeriodFilter(filter) {
  return {
    type: SET_PERIOD_FILTER,
    filter,
  };
}

export function openCreateEventModal() {
  return {
    type: OPEN_CREATE_EVENT_MODAL,
  };
}

export function closeCreateEventModal() {
  return {
    type: CLOSE_CREATE_EVENT_MODAL,
  };
}

export function openUpdateEventModal(event) {
  return {
    type: OPEN_UPDATE_EVENT_MODAL,
    event,
  };
}

export function closeUpdateEventModal() {
  return {
    type: CLOSE_UPDATE_EVENT_MODAL,
  };
}
