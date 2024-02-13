import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDcQo6wnVPE9Q2QhMy3H8TfYuwaSNyw_ps",
  authDomain: "gadgethub-db7d3.firebaseapp.com",
  projectId: "gadgethub-db7d3",
  storageBucket: "gadgethub-db7d3.appspot.com",
  messagingSenderId: "422120863635",
  appId: "1:422120863635:web:e2d5dcd3bebcbc7f8d1a66",
  databaseURL: "https://gadgethub-db7d3-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
