import { combineReducers } from 'redux';
import themeUsersReducer from './userReducers/themeUsers';
import headerSearchReducer from './search/header-search';
import readMessageReducer from './auth-info/message';
import readNotificationReducer from './auth-info/notification';
import emailReducer from './emailReducers';

const rootReducers = combineReducers({
  themeUsers: themeUsersReducer,
  headerSearchData: headerSearchReducer,
  message: readMessageReducer,
  notification: readNotificationReducer,
  email: emailReducer,
});
export default rootReducers;
