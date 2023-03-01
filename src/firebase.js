import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDycChWNDoqMtKHHNwxu8OZ8yr5jid-Qnk",
  authDomain: "quroaclone.firebaseapp.com",
  projectId: "quroaclone",
  storageBucket: "quroaclone.appspot.com",
  messagingSenderId: "727515719094",
  appId: "1:727515719094:web:c874d7bcaee0aa316d4d17",
  measurementId: "G-RS6THMYKEZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
