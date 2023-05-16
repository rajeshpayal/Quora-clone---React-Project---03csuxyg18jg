import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDGUCu1-K7V7trPDvU7eKMdLF6KePgxvX4",
  authDomain: "newquoraclone.firebaseapp.com",
  databaseURL: "https://newquoraclone-default-rtdb.firebaseio.com",
  projectId: "newquoraclone",
  storageBucket: "newquoraclone.appspot.com",
  messagingSenderId: "139837518391",
  appId: "1:139837518391:web:1ad1321250be3516bb85b2",
  measurementId: "G-RS6THMYKEZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
