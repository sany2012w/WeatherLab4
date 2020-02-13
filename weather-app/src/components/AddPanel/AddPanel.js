import React from 'react';
import './AddPanel.css';

export default function AddPanel(props) {
  return (
    <div className="CitiesPanel">
      <div className="CitiesText">Favorites</div>
      <form  onSubmit={(e) => props.onSubmit(e)}>
        <input className="CitiesInput" type="text" name="cityName" placeholder="City name" required />
        <input className="CitiesButton" type="submit" value="Add city"/>
      </form>
    </div>
  );
}
