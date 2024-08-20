import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA62XENuYX7mHYDRcW2lxZo0AteknHun3Q",
  authDomain: "korean-association-app.firebaseapp.com",
  projectId: "korean-association-app",
  storageBucket: "korean-association-app.appspot.com",
  messagingSenderId: "243834615776",
  appId: "1:243834615776:web:7bb59218ceaeef36949d85",
  measurementId: "G-SW4RY07Y2T"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
