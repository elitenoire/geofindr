import { GET_IP_GEOCODE, GET_IP_GEOCODE_PASS, GET_IP_GEOCODE_FAIL, SAVE_GEOCOORDS } from '../constants';

const INITIAL_STATE = {error : false, geocoords : {}};

//ask ebuka if this is mutating state via state.push()
export default (state = INITIAL_STATE, { type, payload }) => {
    switch(type){
        // case GET_IP_GEOCODE :
        //     return {...state, isloading : true}
        case GET_IP_GEOCODE_PASS :
        case SAVE_GEOCOORDS :
            // return state.concat([action.payload.data])
            return {...state, geocoords :{lat : payload.lat || payload.latitude, lon : payload.lon || payload.longitude || payload.lng}}
        case GET_IP_GEOCODE_FAIL :
            return {...state, error : true, errmsg : payload.error}
        default :
            return state
    }
}