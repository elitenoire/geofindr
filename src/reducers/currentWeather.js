import { GET_WEATHER_CURRENT } from '../constants';

const INITIAL_STATE = null;

//ask ebuka if this is mutating state via state.push()
export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET_WEATHER_CURRENT :
            // return state.concat([action.payload.data])
            return action.payload.data
        default :
            return state
    }
}