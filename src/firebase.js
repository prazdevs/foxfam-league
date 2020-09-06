import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA_Tk0p9oRNmCr60fisjRragRENhUbd6GA',
  authDomain: 'foxfam-league.firebaseapp.com',
  databaseURL: 'https://foxfam-league.firebaseio.com',
  projectId: 'foxfam-league',
  storageBucket: 'foxfam-league.appspot.com',
  messagingSenderId: '899446682189',
  appId: '1:899446682189:web:32b986fb51a9b2ca85e204',
  measurementId: 'G-PK28EZ2RS6',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
