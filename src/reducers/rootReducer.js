import { combineReducers } from 'redux';

import userReducer from './userReducer'
import logInReducer from './logInReducer'
import mapReducer from './mapReducer'
import pinReducer from './pinReducer'

const rootReducer = combineReducers({
    pins: pinReducer,
    user: userReducer,
    isLoggedIn: logInReducer,
    map: mapReducer,
});

export default rootReducer;