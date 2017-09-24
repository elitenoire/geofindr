import { GET_IP_GEOCODE_PASS, GET_IP_GEOCODE_FAIL } from '../constants';

const INITIAL_STATE = {error : false, };

//ask ebuka if this is mutating state via state.push()
export default (state = INITIAL_STATE, action) => {
    const { type, payload } = action
    switch(type){
        case GET_IP_GEOCODE_PASS :
            // return state.concat([action.payload.data])
            return {...state, lat : payload.lat, lon : payload.lon}
        case GET_IP_GEOCODE_FAIL :
            return {...state, error : true, errmsg : payload.error}
        default :
            return state
    }
}