import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCSGZEcww7bU6JRNSJyqE-s_221meHERJc",
  authDomain: "finance-tracker-20fa6.firebaseapp.com",
  projectId: "finance-tracker-20fa6",
  storageBucket: "finance-tracker-20fa6.appspot.com",
  messagingSenderId: "952458622126",
  appId: "1:952458622126:web:c2f0bcfa539fe6f9e5693f",
};

// Initialize firebase
firebase.initializeApp(firebaseConfig);

// Initialize firestore
const database = firebase.firestore();

// Initialize auth
const auth = firebase.auth();

// Timestamp
const timestamp = firebase.firestore.Timestamp;

export { database, auth, timestamp };
