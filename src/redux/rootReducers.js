import { combineReducers } from 'redux';
import { readMessageReducer } from './message/reducers';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import { readNotificationReducer } from './notification/reducers';
import authReducer from './authentication/reducers';
import ChangeLayoutMode from './themeLayout/reducers';
import { userReducer } from './users/reducers';
import { headerSearchReducer } from './headerSearch/reducers';

import { fsCrudReducer, fsSingleCrudReducer } from './firebase/firestore/reducers';
import firebaseAuth from './firebase/auth/reducers';

const rootReducers = combineReducers({
  fb: firebaseReducer,
  fs: firestoreReducer,
  headerSearchData: headerSearchReducer,
  message: readMessageReducer,
  notification: readNotificationReducer,
  users: userReducer,
  auth: authReducer,
  crud: fsCrudReducer,
  firebaseAuth,
  singleCrud: fsSingleCrudReducer,
  ChangeLayoutMode,
});

export default rootReducers;
