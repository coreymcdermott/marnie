import React                            from 'react';
import { render }                       from 'react-dom';
import { Provider }                     from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk                            from 'redux-thunk';
import promise                          from 'redux-promise';
import createLogger                     from 'redux-logger';
import rootReducer                      from './reducers';
import CalendarContainer                from './containers/CalendarContainer.jsx';
import bootstrap                        from 'bootstrap'
import Bootstrap                        from 'bootstrap/dist/css/bootstrap.css';
import Style                            from './style/style.css';

let logger = createLogger();
let store  = createStore(
  rootReducer,
  applyMiddleware(thunk, promise, logger)
);

render(
  <Provider store={store}>
    <CalendarContainer />
  </Provider>,
  document.getElementById('root')
);
