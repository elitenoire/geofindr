import DarkSkyWeather from 'dark-sky-api';
import GoogleMapApi from 'googlemapapi';
import {GET_PLACES, GET_WEATHER_FORECAST } from '../constants';


export function getForecastWeather(coords){
    //MAKE API CALL TO DARK-SKY
    const request = DarkSkyWeather.loadForecast(coords);
    return {
        type : GET_WEATHER_FORECAST,
        payload : request,

    }
}

export function getAutocompletePlaces(){
    //MAKE API CALL TO PLACES,GEOMETRY
    const request;
    return {
        type : GET_PLACES,
        payload : request,
    }
}