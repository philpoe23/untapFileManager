import { combineReducers } from 'redux';
import themeUsersReducer from './reducers/userReducers/themeUsers';
import readMessageReducer from './reducers/auth-info/message';
import readNotificationReducer from './reducers/auth-info/notification';
import sellersReducer from './reducers/sellersReducers';
import { userReducer } from './reducers/usersReducers';
import { teamReducer } from './reducers/teamReducers';

import authReducer from './authentication/reducers';

import { headerSearchReducer } from './headerSearch/reducers';
import orderReducer from './orders/reducers';
import galleryReducer from './gallary/reducers';
import { emailReducer, SingleEmailReducer } from './email/reducers';
import { productReducer, SingleProductReducer } from './product/reducers';
import { chatReducer, SingleChatReducer, groupChatReducer, SingleChatGroupReducer } from './chat/reducers';
import { projectReducer, SingleProjectReducer } from './project/reducers';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

const rootReducers = combineReducers({
  fb: firebaseReducer,
  fs: firestoreReducer,
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
  chatSingleGroup: SingleChatGroupReducer,
  chat: chatReducer,
  groupChat: groupChatReducer,

  projects: projectReducer,
  project: SingleProjectReducer,
});
export default rootReducers;
