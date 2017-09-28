import { combineReducers } from 'redux';
import status from './status';
import weatherdata from './weatherdata';
import overlay from './overlay'

const rootReducer = combineReducers({
  status,
  weatherdata,
  overlay,
});

export default rootReducer;