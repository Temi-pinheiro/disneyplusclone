import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDwdpk99ipSAlYij_bbYydutO8pzprr2vc',
  authDomain: 'disney-plusclone-8b97d.firebaseapp.com',
  projectId: 'disney-plusclone-8b97d',
  storageBucket: 'disney-plusclone-8b97d.appspot.com',
  messagingSenderId: '47369045046',
  appId: '1:47369045046:web:57b1f33f9de7fa78bfc497',
  measurementId: 'G-ZWJFTL16YM',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };

export default db;
