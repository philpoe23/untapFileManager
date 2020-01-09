import { combineReducers } from 'redux';
import themeUsersReducer from './userReducers/themeUsers';
import headerSearchReducer from './search/header-search';
import readMessageReducer from './auth-info/message';
import readNotificationReducer from './auth-info/notification';

const rootReducers = combineReducers({
  themeUsers: themeUsersReducer,
  headerSearchData: headerSearchReducer,
  message: readMessageReducer,
  notification: readNotificationReducer,
});
export default rootReducers;
