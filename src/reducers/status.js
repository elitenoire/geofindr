import { GET_IP_GEOCODE_FAIL, GET_WEATHER_PASS, GET_WEATHER_FAIL } from '../constants';

const INITIAL_STATE = {error : false, loading : true, errmsg : '' };

//ask ebuka if this is mutating state via state.push()
export default (state = INITIAL_STATE, { type, errmsg }) => {
    switch(type){
        // case GET_IP_GEOCODE :
        //     return {...state, isloading : true}
        case GET_IP_GEOCODE_FAIL :
        case GET_WEATHER_FAIL :
            return {...state, loading : false, error : true, errmsg }
        case GET_WEATHER_PASS :
            return {...state, loading : false }
        // case GET_WEATHER_FAIL :
        //     return {...state, loading : false, error : true, errmsg} //how to reset error flag?
        default :
            return state
    }
}