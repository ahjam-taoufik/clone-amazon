import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9t4RZjslgGySbLA_SYpYmZnW_WYR7xJg",
  authDomain: "challenge-bbb6f.firebaseapp.com",
  projectId: "challenge-bbb6f",
  storageBucket: "challenge-bbb6f.appspot.com",
  messagingSenderId: "705143073239",
  appId: "1:705143073239:web:3386055707524bec1cc392",
};

initializeApp(firebaseConfig);

const db = getFirestore();
export const auth = getAuth();



