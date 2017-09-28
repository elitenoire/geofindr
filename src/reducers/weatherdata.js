import { GET_GEOLOCATION_PASS, GET_IP_GEOCODE_PASS, GET_WEATHER_PASS, SAVE_GEOCOORDS } from '../constants';

const INITIAL_STATE = { geocoords : {}, weather : {} };

export default (state = INITIAL_STATE, { type, payload, weather }) => {
    switch(type){

        case GET_GEOLOCATION_PASS :
        case GET_IP_GEOCODE_PASS :
        case SAVE_GEOCOORDS :
            return {
                ...state,
                geocoords :{lat : payload.lat || payload.latitude, lon : payload.lon || payload.longitude || payload.lng}
            }
        // case GET_IP_GEOCODE_FAIL :
        //     return {...state, geocoords : {}, weather : {} }

        case GET_WEATHER_PASS :
            return {...state, weather }

        // case GET_WEATHER_FAIL :
        //     return {...state, error : true} //how to reset error flag?
        default :
            return state
    }
}