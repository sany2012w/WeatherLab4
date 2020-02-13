export function fetchAddedCitiesSuccess(response, cityName) {
  return {
    type: 'FETCH_ADDED_CITY_SUCCESS',
    payload: {
      response,
      cityName
    }
  }
}

export function fetchAddedCitiesError(error) {
  return {
    type: 'FETCH_ADDED_CITY_ERROR',
    payload: error
  }
}

export function setCities(cities) {
  return {
    type: 'SET_CITIES',
    payload: cities
  }
}

export function addCityAction(cityName) {
  return {
    type: 'ADD_CITY',
    payload: cityName
  };
}

export function deleteCityAction(cityName, error) {
  return {
    type: 'DELETE_CITY',
    payload: {
      cityName,
      error
    }
  };
}
