import { combineReducers } from 'redux';
import forecastWeather from './forecastWeather';
import currentWeather from './currentWeather';

const rootReducer = combineReducers({
  forecastWeather,
  currentWeather,
});

export default rootReducer;