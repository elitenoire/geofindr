import { fork , all} from 'redux-saga/effects'
import watchGetLocationByIP from './ip'
import watchGetWeather from './weather'
//ROOT SAGA - combine all sagas and run at once
// export default function* rootSaga(){
//     //yield an array of iterator objects
//     yield [
//         watchGetLocationByIP()
//     ]
// }

export default function* rootSaga(){
    //yield an array of iterator objects
    yield all([
        fork(watchGetLocationByIP),
        fork(watchGetWeather),
    ])
}