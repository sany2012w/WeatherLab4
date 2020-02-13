import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import geolocationReducer from './reducers/geolocationReducer';
import addedCitiesReducer from './reducers/addedCitiesReducer';
import thunk from "redux-thunk";

const weatherStore = createStore (combineReducers({
geolocation : geolocationReducer,
cities : addedCitiesReducer,
})
, applyMiddleware(thunk));

ReactDOM.render(
<Provider store = {weatherStore}>
  <App />
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
