import { combineReducers } from 'redux';
import WeatherReducer from "./reducer_weather";
import { snackbarReducer } from 'react-redux-snackbar'; 

const rootReducer = combineReducers({
  weather:WeatherReducer,
  snackbar: snackbarReducer
});

export default rootReducer;
