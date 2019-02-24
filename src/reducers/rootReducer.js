import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { getDataReducer } from './getDataReducer';
import { getInputReducer } from './getInputReducer';

export default combineReducers({authReducer, getDataReducer, getInputReducer});