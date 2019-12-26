import { combineReducers } from 'redux';
import themeUsersReducer from './userReducers/themeUsers';

const rootReducers = combineReducers({ themeUsers: themeUsersReducer });
export default rootReducers;
