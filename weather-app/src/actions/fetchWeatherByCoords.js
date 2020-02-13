import { fetchGeolocationSuccess, fetchGeolocationError } from './geolocationAction';

export function fetchWeatherByCoords(coords) {
 return function(dispatch) {
    fetch(`/weather/coordinates?lat=${coords.lat}&long=${coords.lon}`)
      .then(response => {
        response.json()
          .then(json => {
            if (!json.message) {
              dispatch(fetchGeolocationSuccess(json));
            } else {
              let error = json.message;
              dispatch(fetchGeolocationError(error));
            }
          });
      }).catch(function(e){
        dispatch(fetchGeolocationError(e));
      })
  }
}
