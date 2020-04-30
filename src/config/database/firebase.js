import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAMb2JnOjygvABrmATUDFYvh9H79ef4__E',
  authDomain: 'dashboard-c5f2c.firebaseapp.com',
  databaseURL: 'https://dashboard-c5f2c.firebaseio.com',
  projectId: 'dashboard-c5f2c',
  storageBucket: 'dashboard-c5f2c.appspot.com',
  messagingSenderId: '379612248576',
  appId: '1:379612248576:web:c8858ccb8d42e9329c76e5',
  measurementId: 'G-N2JZG1T1P2',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
