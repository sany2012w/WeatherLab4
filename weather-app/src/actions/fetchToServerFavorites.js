import { setCities, addCityAction, deleteCityAction, fetchAddedCitiesError } from './addedCitiesAction';

export function getAddedCities() {
  return function(dispatch) {
    fetch(`/favorites`).then(response => {
        response.json()
          .then(json => {
            let added_cities = []
            json.forEach(function(city){
              added_cities.push(city.city);
            });
            let map = new Map(added_cities.map(cityName => [cityName]));
            dispatch(setCities(map));
          });
      }).catch(function(error){
        console.log(error);
      });
  }
}


export function addCity(city) {
  return function(dispatch) {
    fetch(`/favorites?city=${city}`, {
        method: 'POST'
    }).then(response => {
        response.json()
          .then(json => {
            if(!json.message){
              dispatch(addCityAction(city));
            } else {
              dispatch(fetchAddedCitiesError(json.message));
            }
          });
      }).catch(function(error){
      });
  }
}

export function deleteCity(city, error) {
  return function(dispatch) {
    fetch(`/favorites?city=${city}`, {
        method: 'DELETE',
    }).then(response => {
        response.json()
          .then(json => {
            dispatch(deleteCityAction(city, error));
          });
      }).catch(function(error){
        console.log(error);
      });
  }
}
