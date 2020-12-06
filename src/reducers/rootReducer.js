import { combineReducers } from 'redux';

import userReducer from './userReducer'
import logInReducer from './logInReducer'
import countriesReducer from './countriesReducer'

const rootReducer = combineReducers({
    user: userReducer,
    isLoggedIn: logInReducer,
    countries: countriesReducer
});

export default rootReducer;