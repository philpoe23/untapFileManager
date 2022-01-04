import * as firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAtSfrjZg0rdrUbfSVBNaWFCCyEI6sfyHo",
  authDomain: "bioweapon-fitness.firebaseapp.com",
  databaseURL: "https://bioweapon-fitness.firebaseio.com",
  projectId: "bioweapon-fitness",
  storageBucket: "bioweapon-fitness.appspot.com",
  messagingSenderId: "60323863739",
  appId: "1:60323863739:web:c095e6b897569be8cf5d9e",
  measurementId: "G-CRY5YYVJ38"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
