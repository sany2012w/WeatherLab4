import React from 'react';
import './App.css';
import Geolocation from '../Geolocation/Geolocation';
import AddedCities from "../AddedCities/AddedCities";

function App() {
  return (
    <div className="App">
      <Geolocation />
      <AddedCities />
    </div>
  );
}

export default App;
