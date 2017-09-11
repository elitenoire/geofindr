import { GET_WEATHER_FORECAST } from '../constants';

const INITIAL_STATE = [];

//ask ebuka if this is mutating state via state.push()
export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case GET_WEATHER_FORECAST :
            // return state.concat([action.payload.data])
            return [action.payload.data, ...state]
        default :
            return state
    }
}