import { combineReducers } from 'redux';
import forecastWeather from './forecastWeather';
import currentWeather from './currentWeather';
import weatherStatus from './weatherStatus'

const rootReducer = combineReducers({
  forecastWeather,
  currentWeather,
  weatherStatus,
});

export default rootReducer;