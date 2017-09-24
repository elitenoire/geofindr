import {
    GET_IP_GEOCODE, GET_WEATHER_CURRENT,
    GET_WEATHER_FORECAST, UPDATE_WEATHER_STATE } from '../constants';
import WeatherApi from '../utils/weather-api'

const OPEN_WEATHER = '0f344077779ee6dbf8caac745440395f';

export function getLocationByIP(){
    return {
        type : GET_IP_GEOCODE
    }
}

export function getForecastWeather(coords){
    //MAKE API CALL TO OPEN WEATHER MAP
    const request = WeatherApi.currentWeather({coords, key : OPEN_WEATHER})
    return {
        type : GET_WEATHER_FORECAST,
        payload : request,

    }
}

export function getCurrentWeather(coords){
    //MAKE API CALL TO PLACES,GEOMETRY
    const request = WeatherApi.currentWeather({coords, key : OPEN_WEATHER})
    return {
        type : GET_WEATHER_CURRENT,
        payload : request,
    }
}

export function updateWeatherStatus(status){
    return {
        type : UPDATE_WEATHER_STATE,
        payload : status,
    }
}