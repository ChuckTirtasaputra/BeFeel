import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDzWIGknksCVNZ2SMNZXjvyUCdgKtntJY",
  authDomain: "befeel-2efed.firebaseapp.com",
  projectId: "befeel-2efed",
  storageBucket: "befeel-2efed.appspot.com",
  messagingSenderId: "1036686761357",
  appId: "1:1036686761357:web:869776c9d4a069166ef1c4",
  measurementId: "G-BJ2KSX2S9J"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
