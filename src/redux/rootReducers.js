import { combineReducers } from 'redux';
import themeUsersReducer from './reducers/userReducers/themeUsers';
import headerSearchReducer from './reducers/search/header-search';
import readMessageReducer from './reducers/auth-info/message';
import readNotificationReducer from './reducers/auth-info/notification';
import { emailReducer, emailSingleReducer } from './reducers/emailReducers';
import orderReducer from './reducers/ordersReducers';
import sellersReducer from './reducers/sellersReducers';
import galleryReducer from './reducers/galleryReducers';
import { productReducer, SingleProductReducer } from './product/reducers';
import { userReducer } from './reducers/usersReducers';
import { teamReducer } from './reducers/teamReducers';

import authReducer from './authentication/reducers';

import { chatReducer, SingleChatReducer } from './chat/reducers';
import { projectReducer, SingleProjectReducer } from './project/reducers';

const rootReducers = combineReducers({
  themeUsers: themeUsersReducer,
  headerSearchData: headerSearchReducer,
  message: readMessageReducer,
  notification: readNotificationReducer,
  email: emailReducer,
  emailSingle: emailSingleReducer,
  products: productReducer,
  product: SingleProductReducer,
  orders: orderReducer,
  sellers: sellersReducer,
  gallery: galleryReducer,
  users: userReducer,
  team: teamReducer,

  auth: authReducer,

  chatSingle: SingleChatReducer,
  chat: chatReducer,

  projects: projectReducer,
  project: SingleProjectReducer,
});
export default rootReducers;
