import { combineReducers } from 'redux';
import themeUsersReducer from './userReducers/themeUsers';
import headerSearchReducer from './search/header-search';
import readMessageReducer from './auth-info/message';
import readNotificationReducer from './auth-info/notification';
import emailReducer from './emailReducers';
import chatReducer from './chatReducers';
import orderReducer from './ordersReducers';
import sellersReducer from './sellersReducers';
import galleryReducer from './galleryReducers';
import authReducer from './authenticationReducers';
import { productReducer, productSingleReducer } from './productReducers';

const rootReducers = combineReducers({
  themeUsers: themeUsersReducer,
  headerSearchData: headerSearchReducer,
  message: readMessageReducer,
  notification: readNotificationReducer,
  email: emailReducer,
  chat: chatReducer,
  products: productReducer,
  product: productSingleReducer,
  orders: orderReducer,
  sellers: sellersReducer,
  gallery: galleryReducer,
  auth: authReducer,
});
export default rootReducers;
