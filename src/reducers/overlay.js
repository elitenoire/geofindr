import { GET_WEATHER, GET_WEATHER_PASS, GET_WEATHER_FAIL } from '../constants';

const INITIAL_STATE = { overlayActive : false};

//ask ebuka if this is mutating state via state.push()
export default (state = INITIAL_STATE, { type }) => {
    switch(type){
        case GET_WEATHER :
            return { overlayActive : true }
        case GET_WEATHER_PASS :
            return { overlayActive : false }
        case GET_WEATHER_FAIL :
            return { overlayActive : false } // add state to change error msg on overlay
        default :
            return state
    }
}