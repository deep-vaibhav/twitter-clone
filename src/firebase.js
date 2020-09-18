import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSmQc-2NCOi4SdMryjy-bRdEs6eERp1ZI",
  authDomain: "twitter-clone-5283c.firebaseapp.com",
  databaseURL: "https://twitter-clone-5283c.firebaseio.com",
  projectId: "twitter-clone-5283c",
  storageBucket: "twitter-clone-5283c.appspot.com",
  messagingSenderId: "600294404398",
  appId: "1:600294404398:web:06161c12c6f0bfebca0abf",
  measurementId: "G-VFSQ74T531",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
