import {
    GET_IP_GEOCODE, GET_GEOLOCATION, GET_WEATHER, SAVE_GEOCOORDS,
    UPDATE_WEATHER_STATE } from '../constants';

export function getLocationByIP(){
    return {
        type : GET_IP_GEOCODE
    }
}

export function getGeolocation(geolocation){
    return {
        type : GET_GEOLOCATION,
        geolocation,
    }
}

export function saveGeocoords(coords){
    return {
        type : SAVE_GEOCOORDS,
        payload : coords,
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