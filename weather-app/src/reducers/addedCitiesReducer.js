import fetchToServerFavorites from '../actions/fetchToServerFavorites';

export default function addedCitiesReducer(state = {added_cities: new Map([].map(cityName => [cityName]))}, action) {
  state = {
    ...state,
    error: false,
    added_cities: new Map(state.added_cities)
  };

  switch (action.type) {
    case 'SET_CITIES':
      state.added_cities = action.payload;
      break;
    case 'ADD_CITY':
      if (!state.added_cities.has(action.payload))
        state.added_cities.set(action.payload);
      break;
    case 'DELETE_CITY':
      state.added_cities.delete(action.payload.cityName);
      state.error = action.payload.error;
      break;
    case 'FETCH_ADDED_CITY_SUCCESS':
      state.added_cities.delete(action.payload.cityName);
      state.added_cities.set(action.payload.response.name, action.payload.response);
      break;
    case 'FETCH_ADDED_CITY_ERROR':
      state.error = action.payload;
      break;
    default:
      break;
  }
  return state;
}
