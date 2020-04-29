import { combineReducers } from 'redux';
import themeUsersReducer from './reducers/userReducers/themeUsers';
import headerSearchReducer from './reducers/search/header-search';
import readMessageReducer from './reducers/auth-info/message';
import readNotificationReducer from './reducers/auth-info/notification';
import orderReducer from './reducers/ordersReducers';
import sellersReducer from './reducers/sellersReducers';
import { userReducer } from './reducers/usersReducers';
import { teamReducer } from './reducers/teamReducers';

import authReducer from './authentication/reducers';

import galleryReducer from './gallary/reducers';
import { emailReducer, SingleEmailReducer } from './email/reducers';
import { productReducer, SingleProductReducer } from './product/reducers';
import { chatReducer, SingleChatReducer } from './chat/reducers';
import { projectReducer, SingleProjectReducer } from './project/reducers';

const rootReducers = combineReducers({
  themeUsers: themeUsersReducer,
  headerSearchData: headerSearchReducer,
  message: readMessageReducer,
  notification: readNotificationReducer,
  orders: orderReducer,
  sellers: sellersReducer,
  users: userReducer,
  team: teamReducer,

  auth: authReducer,

  gallery: galleryReducer,

  email: emailReducer,
  emailSingle: SingleEmailReducer,

  products: productReducer,
  product: SingleProductReducer,

  chatSingle: SingleChatReducer,
  chat: chatReducer,

  projects: projectReducer,
  project: SingleProjectReducer,
});
export default rootReducers;
