import { fork , all} from 'redux-saga/effects'
import watchGeolocation from './geolocation'
import watchGetLocationByIP from './ip'
import watchGetWeather from './weather'

export default function* rootSaga(){
    //yield an array of iterator objects
    yield all([
        fork(watchGeolocation),
        fork(watchGetLocationByIP),
        fork(watchGetWeather),
    ])
}