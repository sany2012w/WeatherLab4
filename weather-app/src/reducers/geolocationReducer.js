export default function geolocationReducer (state, action) {
  state = {
    ...state,
    error: false
  };
  switch (action.type) {
    case 'SET_COORDS':
      state.coords = action.payload;
      break;
    case 'FETCH_GEOLOCATION_SUCCESS':
      state.forecast =  action.payload;
      state.isLoading = false;
      break;
    case 'FETCH_GEOLOCATION_ERROR':
      state.error = action.payload;
      state.isLoading = false;
      break;
    case 'SET_LOADING_TRUE':
      state.isLoading = action.payload;
      break;
    default:
      break;
  }
  return state;
}
