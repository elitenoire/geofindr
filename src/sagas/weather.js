import { takeEvery, select, call, put, take, all, fork } from 'redux-saga/effects'
import WeatherApi from '../utils/weather-api'
import {
     GET_WEATHER, GET_WEATHER_PASS, GET_WEATHER_FAIL,
     GET_WEATHER_CURRENT_PASS, GET_WEATHER_FORECAST_PASS
    } from '../constants'
const OPEN_WEATHER = '0f344077779ee6dbf8caac745440395f';

function* getWeather(){
    try{
        const coords = yield select(({ipGeocode}) => ipGeocode.geocoords)
        const {current, forecast} = yield all({
            current : call(getCurrent, coords),
            forecast : call(getForecast , coords)
        })
        console.log('current in getWeather: ' , current)
        console.log('forecast in getWeather: ' , forecast)
        yield take([GET_WEATHER_CURRENT_PASS, GET_WEATHER_FORECAST_PASS])
        yield put({type: GET_WEATHER_PASS, weather:{current, forecast}})
    }
    catch(err){
        yield put({type: GET_WEATHER_FAIL,  error : true, errmsg : err.message})
    }
}

function* getCurrent(coords){
    try{
        const response = yield call(WeatherApi.currentWeather, {coords, key: OPEN_WEATHER})
        yield put({type: GET_WEATHER_CURRENT_PASS})
        console.log('getCurrent response is: ', response)
        return response.data
    }
    catch(err){
        console.log('error in getCurrent: ', err)
    }
    
}

function* getForecast(coords){
    try{
        const response = yield call(WeatherApi.forecastWeather, {coords, key: OPEN_WEATHER})
        yield put({type: GET_WEATHER_FORECAST_PASS})
        return response.data
    }
    catch(err){
        console.log('error in getForecast: ', err)
    }
}

export default function* watchWeather(){
    yield takeEvery(GET_WEATHER, getWeather)
}