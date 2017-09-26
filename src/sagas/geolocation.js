import { takeEvery, cps, put} from 'redux-saga/effects'
import { GET_IP_GEOCODE, GET_IP_GEOCODE_PASS,
        GET_GEOLOCATION, GET_WEATHER } from '../constants';

// Use geolocation api to get coords via callback
function geolocator(geolocation, cb){
    geolocation.getCurrentPosition( ({coords}) => cb(null,coords), (err) => cb(err) )
}

//WORKER SAGA - return async response from api
function* getGeolocationCoords({ geolocation }){
    try{
        const response = yield cps(geolocator, geolocation)
        yield put({type: GET_IP_GEOCODE_PASS, payload : response})
        yield put ({type: GET_WEATHER})
    }
    catch(err){
        console.log('err ', err)
        yield put({type: GET_IP_GEOCODE})
    }
}

//WATCHER SAGA - listen for dispatched action, call worker to handle action
export default function* watchGeolocation(){
    yield takeEvery(GET_GEOLOCATION, getGeolocationCoords)
}
