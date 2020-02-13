import React from "react";
import AddedCities from "./AddedCities";
import renderer from "react-test-renderer";
import weatherTestData from "./weatherTestData";
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux'
import thunk from "redux-thunk";

const testStore = configureMockStore([thunk]);

describe("AddedCities are displayed correctly", () => {
    it("There are cities in the favorites", () => {
      let testCities = new Map([["London", weatherTestData], ["London1", weatherTestData]]);
      const store = testStore({
        cities: {
              added_cities: testCities
          }
        });

      const tree = renderer.create(
        <Provider store={store}>
          <AddedCities/>
       </Provider>).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("There are no cities in the favorites", () => {
      let testCities = new Map();
      const store = testStore({
        cities: {
              added_cities: testCities
          }
        });
      const tree = renderer.create(
        <Provider store={store}>
          <AddedCities/>
       </Provider>).toJSON();
      expect(tree).toMatchSnapshot();
    });
})


describe("Error", () => {
    it("There are cities in the favorites", () => {
      let testCities = new Map([["London", weatherTestData], ["London1", weatherTestData]]);
      const store = testStore({
        cities: {
              added_cities: testCities,
              error: 'Something wrong'
          }
        });

      const tree = renderer.create(
        <Provider store={store}>
          <AddedCities/>
       </Provider>).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("There are no cities in the favorites", () => {
      let testCities = new Map();
      const store = testStore({
        cities: {
              added_cities: testCities,
              error: 'Something wrong'
          }
        });
      const tree = renderer.create(
        <Provider store={store}>
          <AddedCities/>
       </Provider>).toJSON();
      expect(tree).toMatchSnapshot();
    });
})
