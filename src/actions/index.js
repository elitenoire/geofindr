import WeatherApi from '../utils/weatherapi'
import {GET_PLACES, GET_WEATHER_FORECAST } from '../constants';

const OPEN_WEATHER = '';


export function getForecastWeather(coords){
    //MAKE API CALL TO OPEN WEATHER MAP
    const request = WeatherApi.currentWeather({coords, key : OPEN_WEATHER})
    return {
        type : GET_WEATHER_FORECAST,
        payload : request,

    }
}

export function getAutocompletePlaces(){
    //MAKE API CALL TO PLACES,GEOMETRY
    const request = 'not yet implemented';
    return {
        type : GET_PLACES,
        payload : request,
    }
}