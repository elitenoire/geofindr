import { takeEvery, call, put} from 'redux-saga/effects'
import WeatherApi from '../utils/weather-api'
import { GET_IP_GEOCODE, GET_IP_GEOCODE_PASS, GET_IP_GEOCODE_FAIL, GET_WEATHER } from '../constants';

//WORKER SAGA - return async response from api
function* getIPLocation(){
    try{
        //make api request - pass function to return promise, dont call function
        const response = yield call(WeatherApi.ipGeocoder)
        //dispatch result to reducers
        console.log('iplocation response is: ', response)
        console.log('saga success')
        yield put({type: GET_IP_GEOCODE_PASS, payload : response.data})
        yield put ({type: GET_WEATHER})
    }
    catch(err){
        console.log('saga fail')
        yield put({type: GET_IP_GEOCODE_FAIL, error : err.message})
    }
}
//WATCHER SAGA - listen for dispatched action, call worker to handle action
export default function* watchGetLocationByIP(){
    yield takeEvery(GET_IP_GEOCODE, getIPLocation)
}
