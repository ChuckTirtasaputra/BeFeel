// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkJg_0HdIw9c12fxHT7NzHQ_hv1n4Nf8o",
  authDomain: "lasttry-aad3f.firebaseapp.com",
  projectId: "lasttry-aad3f",
  storageBucket: "lasttry-aad3f.appspot.com",
  messagingSenderId: "164162883773",
  appId: "1:164162883773:web:d49261be23bdf042baa7d4"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);