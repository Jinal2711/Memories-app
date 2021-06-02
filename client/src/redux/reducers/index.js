import { combineReducers } from 'redux';
import postReducer from './postReducer';
import authReducer from './authReducer';

const rootReducers = combineReducers({
    postReducer,
    authReducer
})
export default rootReducers;