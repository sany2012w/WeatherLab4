import React from "react";
import WeatherData from "./WeatherData";
import renderer from "react-test-renderer";
import weatherTestData from "./weatherTestData";

describe("Geolocation weather data", () => {
    it("Weather data loaded", () => {
        const tree = renderer.create(<WeatherData data={weatherTestData}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("Weather data is loading", () => {
        const tree = renderer.create(<WeatherData/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
})

describe("AddCity weather data", () => {
    it("Weather data loaded", () => {
        const tree = renderer.create(<WeatherData
          data={weatherTestData}
          onFetch={()=> {}}
          onDelete={()=> {}}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("Weather data is loading", () => {
        const tree = renderer.create(<WeatherData
          onFetch={()=> {}}
          onDelete={()=> {}}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
})
