import React from 'react';
import './Geolocation.css';
import WeatherData from '../WeatherData/WeatherData'
import { connect } from "react-redux";
import { setCoords, fetchGeolocationError, setLoadingTrue } from '../../actions/geolocationAction';
import { fetchWeatherByCoords } from '../../actions/fetchWeatherByCoords';
import Header from '../Header/Header'
import Loader from '../Loader/Loader'

class Geolocation extends React.Component {
  componentDidMount() {
    this.getGeolocation();
  }

  render() {
    let weatherBlock = this.setWeatherBlock();
    return (
      <div>
        <Header updateGeolocation = {this.getGeolocation.bind(this)}/>
        {!this.props.isLoading && weatherBlock}
        {this.props.isLoading && <Loader/>}
      </div>
    );
  }

  getGeolocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.props.setLoadingTrue();
        this.props.setCoords({lat: position.coords.latitude, lon: position.coords.longitude});
        this.props.fetchWeatherByCoords(this.props.coords);
      },
      () => {
        this.props.setCoords({lat: 51.51, lon: -0.13});
        this.props.fetchWeatherByCoords(this.props.coords);
        alert('Permission denied. Load weather from default coordinates');
      });
    } else {
      this.props.fetchGeolocationError('your browser does not support geolocation');
    }
  }

  setWeatherBlock ()  {
    let weatherBlock = null;
    if(this.props.forecast) {
      weatherBlock = <WeatherData data={this.props.forecast}/>;
    } else if (this.props.error){
      weatherBlock = <div className="error">Error: {this.props.error}</div>;
    } else if (!this.props.forecast && !this.props.error) {
      weatherBlock = <Loader/>
    }
    return weatherBlock;
  }

}


function mapStateToProps(state) {
return {
  coords: state.geolocation.coords,
  forecast: state.geolocation.forecast,
  error: state.geolocation.error,
  isLoading: state.geolocation.isLoading
};
}

function mapDispatchToProps(dispatch) {
return {
  setCoords: (coords) => {
    dispatch(setCoords(coords));
  },

  fetchWeatherByCoords: (coords) => {
    dispatch(fetchWeatherByCoords(coords));
  },

  setLoadingTrue: () => {
    dispatch(setLoadingTrue());
  },

  fetchGeolocationError: (error) => {
    dispatch(fetchGeolocationError(error));
  }
};
}

export default connect(mapStateToProps, mapDispatchToProps)(Geolocation);
