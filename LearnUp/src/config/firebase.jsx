// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA7AD_OJaEel0pOiATApWdQImzNZJ0DMRE",
  authDomain: "learnup-3762b.firebaseapp.com",
  projectId: "learnup-3762b",
  storageBucket: "learnup-3762b.appspot.com",
  messagingSenderId: "858136263821",
  appId: "1:858136263821:web:0cfe49e2582335bfcdb6c4",
  measurementId: "G-3BYZXQZHHQ"
};

// Initialize Firebase
// const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
