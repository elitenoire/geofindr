import axios from 'axios';
import qs from  'querystringify'
import { BASE_URL } from '../constants';

const client = axios.create({
    baseURL: BASE_URL
  });

// const query = {
//       units : 'metric',
//       appid : null,
//       lat : null,
//       lon : null,
//       cnt : null,
// }

const currentWeather = (objQuery) => {
    const query = parser(objQuery)
    console.log('Sending query...', query)
    console.log(qs.stringify(query,true))
    return client.get('/weather' + qs.stringify(query,true)) //promise
}
const forecastWeather = (objQuery) => {
    const query = parser(objQuery)
    return client.get('/forecast' + qs.stringify(query,true)) //promise
}


const parser = (obj) => {
    const parsed = {};
    parsed.cnt = obj.cnt || null
    parsed.units = obj.units || 'metric' //imperial
    parsed.lat = obj.lat || obj.latitude || obj.coords.latitude || obj.coords.lat
    parsed.lon = obj.lon || obj.longitude || obj.coords.longitude || obj.coords.lon
    parsed.appid = obj.appid || obj.key
    return parsed
}

const WeatherApi = { currentWeather, forecastWeather }

export default WeatherApi;