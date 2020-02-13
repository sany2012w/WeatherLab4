import React from "react";
import { connect } from "react-redux";
import AddPanel from '../AddPanel/AddPanel';
import WeatherData from '../WeatherData/WeatherData';
import { fetchWeatherByCityName } from '../../actions/fetchWeatherByCityName';
import { getAddedCities, deleteCity, addCity } from '../../actions/fetchToServerFavorites';
import './AddedCities.css';


class AddedCities extends React.Component {
  componentDidMount() {
    this.props.getAddedCities();
  }

  render() {
    return (
      <div>
        <AddPanel onSubmit={(e) => this.addNewCity(e)} />
        {this.props.error && <div className="error">Error: {this.props.error}</div>}
        <div className="weather">
          {
            [...this.props.added_cities.entries()].map((entry) => {
              return (
                <WeatherData
                  key={entry[0]}
                  onFetch={() => this.props.fetchWeatherByCityName(entry[0])}
                  onDelete={() => this.props.deleteCity(entry[0], false)}
                  data={entry[1]}/>
              );
            })
          }
        </div>
      </div>
    );
  }

  addNewCity(e) {
    e.preventDefault();
    this.props.addCity(e.currentTarget.elements.cityName.value);
  }
}




function mapStateToProps(state) {
  return {
    added_cities: state.cities.added_cities,
    error: state.cities.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAddedCities: () => {
      dispatch(getAddedCities());
    },

    addCity: (cityName) => {
      dispatch(addCity(cityName));
    },

    deleteCity: (cityName) => {
      dispatch(deleteCity(cityName));
    },

    fetchWeatherByCityName: (cityName) => {
      dispatch(fetchWeatherByCityName(cityName));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddedCities);
