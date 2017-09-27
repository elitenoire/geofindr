import { GET_WEATHER, GET_WEATHER_PASS, GET_WEATHER_FAIL } from '../constants';

const INITIAL_STATE = {loading : false, error : false, weather : {}};

//ask ebuka if this is mutating state via state.push()
export default (state = INITIAL_STATE, action) => {
    const { type, weather, errmsg } = action
    switch(type){
        case GET_WEATHER :
            // return state.concat([action.payload.data])
            return {...state, loading : true}
        case GET_WEATHER_PASS :
            return {...state, loading : false, weather }
        case GET_WEATHER_FAIL :
            return {...state, loading : false, error : true} //how to reset error flag?
        default :
            return state
    }
}