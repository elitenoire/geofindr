import { combineReducers } from 'redux';
import ipGeocode from './ipGeocode';
import weather from './Weather';
import statusFlags from './statusFlags'

const rootReducer = combineReducers({
  ipGeocode,
  weather,
  statusFlags,
});

export default rootReducer;