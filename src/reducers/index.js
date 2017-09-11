import { combineReducers } from 'redux';
import forecastWeather from './forecastWeather';

const rootReducer = combineReducers({
  forecastWeather,
});

export default rootReducer;