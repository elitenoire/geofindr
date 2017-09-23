import { UPDATE_WEATHER_STATE } from '../constants'

const INITIAL_STATE = false;

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case UPDATE_WEATHER_STATE :
            return action.payload.data
        default :
            return state
    }
}