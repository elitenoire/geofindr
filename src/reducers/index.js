import { combineReducers } from 'redux';
import ipGeocode from './ipGeocode';
import forecastWeather from './forecastWeather';
import currentWeather from './currentWeather';
import statusFlags from './statusFlags'

const rootReducer = combineReducers({
  ipGeocode,
  forecastWeather,
  currentWeather,
  statusFlags,
});

export default rootReducer;