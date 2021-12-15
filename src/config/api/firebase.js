import * as firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDmcwqBr9vu-LcpJWB5JePyqjV1ti7ENEQ',
  authDomain: 'truscottdev.firebaseapp.com',
  projectId: 'truscottdev',
  storageBucket: 'truscottdev.appspot.com',
  messagingSenderId: '623640898199',
  appId: '1:623640898199:web:f799c2468f38552c9497d2',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
