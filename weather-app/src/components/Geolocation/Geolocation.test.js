import React from "react";
import Geolocation from "./Geolocation";
import renderer from "react-test-renderer";
import weatherTestData from "./weatherTestData";
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux'
import thunk from "redux-thunk";

const testStore = configureMockStore([thunk]);

it("Weather data loaded", () => {
  const store = testStore({
    geolocation: {
          forecast: weatherTestData,
          isLoading: false
      }
    });

  const tree = renderer.create(
    <Provider store={store}>
      <Geolocation/>
   </Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("Weather data is loading and no forecast", () => {
  const store = testStore({
    geolocation: {
          isLoading: true
      }
    });

  const tree = renderer.create(
    <Provider store={store}>
      <Geolocation/>
   </Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("Weather data is loading and there is forecast", () => {
  const store = testStore({
    geolocation: {
          forecast: weatherTestData,
          isLoading: true
      }
    });

  const tree = renderer.create(
    <Provider store={store}>
      <Geolocation/>
   </Provider>).toJSON();

  expect(tree).toMatchSnapshot();
});

it("Error", () => {
  const store = testStore({
    geolocation: {
          error: 'Something wrong'
        }
    });

  const tree = renderer.create(
    <Provider store={store}>
      <Geolocation/>
   </Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("There are only coords without forecast", () => {
  const store = testStore({
    geolocation: {
          coords: {
            lat: 10,
            lon: 51
          }
        }
    });

  const tree = renderer.create(
    <Provider store={store}>
      <Geolocation/>
   </Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});

it("There are coords with forecast", () => {
  const store = testStore({
    geolocation: {
          coords: {
            lat: 10,
            lon: 51
          },
          forecast: weatherTestData
        }
    });

  const tree = renderer.create(
    <Provider store={store}>
      <Geolocation/>
   </Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});
