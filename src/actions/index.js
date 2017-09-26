import {
    GET_IP_GEOCODE, GET_WEATHER_CURRENT, GET_WEATHER,
    GET_WEATHER_FORECAST, UPDATE_WEATHER_STATE } from '../constants';

export function getLocationByIP(){
    return {
        type : GET_IP_GEOCODE
    }
}

export function getWeather(){
    return {
        type : GET_WEATHER
    }
}


export function updateWeatherStatus(status){
    return {
        type : UPDATE_WEATHER_STATE,
        payload : status,
    }
}