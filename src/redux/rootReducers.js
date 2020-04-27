import { combineReducers } from 'redux';
import themeUsersReducer from './reducers/userReducers/themeUsers';
import headerSearchReducer from './reducers/search/header-search';
import readMessageReducer from './reducers/auth-info/message';
import readNotificationReducer from './reducers/auth-info/notification';
import { emailReducer, emailSingleReducer } from './reducers/emailReducers';
import { chatReducer, SingleReducer } from './chat/reducers';
import orderReducer from './reducers/ordersReducers';
import sellersReducer from './reducers/sellersReducers';
import galleryReducer from './reducers/galleryReducers';
import authReducer from './reducers/authReducers';
import { productReducer, productSingleReducer } from './reducers/productReducers';
import { userReducer } from './reducers/usersReducers';
import { teamReducer } from './reducers/teamReducers';

const rootReducers = combineReducers({
  themeUsers: themeUsersReducer,
  headerSearchData: headerSearchReducer,
  message: readMessageReducer,
  notification: readNotificationReducer,
  email: emailReducer,
  emailSingle: emailSingleReducer,
  chat: chatReducer,
  chatSingle: SingleReducer,
  products: productReducer,
  product: productSingleReducer,
  orders: orderReducer,
  sellers: sellersReducer,
  gallery: galleryReducer,
  auth: authReducer,
  users: userReducer,
  team: teamReducer,
});
export default rootReducers;
