import React from "react";
import App from "./App";
import renderer from "react-test-renderer";
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux'
import thunk from "redux-thunk";
import weatherTestData from "./weatherTestData";

const testStore = configureMockStore([thunk]);

it(`App displayed correctly`, () => {
  let testCities = new Map([["London", weatherTestData], ["London1", weatherTestData]]);
  const store = testStore({
    geolocation: {
          forecast: weatherTestData,
          isLoading: false
      },
    cities: {
          added_cities: testCities
      }
    });
  const tree = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});
