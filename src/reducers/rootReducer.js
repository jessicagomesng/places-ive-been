import { combineReducers } from 'redux';

import userReducer from './userReducer'
import logInReducer from './logInReducer'
import mapReducer from './mapReducer'

const rootReducer = combineReducers({
    user: userReducer,
    isLoggedIn: logInReducer,
    map: mapReducer
});

export default rootReducer;