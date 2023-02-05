// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-_7dhYmTgFtT1UnqG3pk_r9qe-z1s0iA",
  authDomain: "socialapp-cc10c.firebaseapp.com",
  projectId: "socialapp-cc10c",
  storageBucket: "socialapp-cc10c.appspot.com",
  messagingSenderId: "1053421023514",
  appId: "1:1053421023514:web:f86dc303875725aebb7ca3",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);