import { fetchAddedCitiesSuccess, fetchAddedCitiesError } from './addedCitiesAction';
import { deleteCity } from './fetchToServerFavorites';
export function fetchWeatherByCityName(cityName) {
 return function(dispatch) {
    fetch(`/weather?city=${cityName}`)
      .then(response => {
        response.json()
          .then(json => {
            if (!json.message) {
              dispatch(fetchAddedCitiesSuccess(json, cityName));
            } else {
              let error = json.message;
              dispatch(deleteCity(cityName, error));
            }
          });
      }).catch(function(e){
        dispatch(fetchAddedCitiesError(e));
      })
  }
}
