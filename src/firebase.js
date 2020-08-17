import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyATneUE2hOoblieHA7gNJ2n_9VawPziMDE",
  authDomain: "twitter-clone-a4134.firebaseapp.com",
  databaseURL: "https://twitter-clone-a4134.firebaseio.com",
  projectId: "twitter-clone-a4134",
  storageBucket: "twitter-clone-a4134.appspot.com",
  messagingSenderId: "429422709257",
  appId: "1:429422709257:web:4558357ac9d8c43e4bc6d8",
  measurementId: "G-S1JVLC6ED9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;