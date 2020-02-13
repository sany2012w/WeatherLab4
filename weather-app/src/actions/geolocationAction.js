export function setCoords(coords) {
  return {
    type: 'SET_COORDS',
    payload: coords
  }
}

export function fetchGeolocationSuccess(response) {
  return {
    type: 'FETCH_GEOLOCATION_SUCCESS',
    payload: response
  }
}

export function fetchGeolocationError(error) {
  return {
    type: 'FETCH_GEOLOCATION_ERROR',
    payload: error
  }
}

export function setLoadingTrue() {
  return {
    type: 'SET_LOADING_TRUE',
    payload: true
  }
}
