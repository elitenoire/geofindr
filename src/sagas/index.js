import { takeEvery, call, put } from 'redux-saga/effects'
import WeatherApi from '../utils/weather-api'
import {
    GET_IP_GEOCODE, GET_IP_GEOCODE_PASS, GET_IP_GEOCODE_FAIL,
    GET_WEATHER_CURRENT,
    GET_WEATHER_FORECAST, UPDATE_WEATHER_STATE } from '../constants';

//WORKER SAGA - return async response from api
function* getIPLocation(){
    try{
        //make api request - pass function to return promise, dont call function
        const response = yield call(WeatherApi.ipGeocoder)
        //dispatch result to reducers
        yield console.log(response)
        console.log('saga success')
        yield put({type: GET_IP_GEOCODE_PASS, payload : response.data})
        
    }
    catch(err){
        console.log('saga fail')
        yield put({type: GET_IP_GEOCODE_FAIL, error : err.message})
    }
}
//WATCHER SAGA - listen for dispatched action, call worker to handle action
function* watchGetLocationByIP(){
    yield takeEvery(GET_IP_GEOCODE, getIPLocation)
}
//ROOT SAGA - combine all sagas and run at once
export default function* rootSaga(){
    yield [
        watchGetLocationByIP()
    ]
}