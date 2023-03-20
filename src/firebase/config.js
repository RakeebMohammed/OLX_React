import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA40GjgasE7JlmvpnSU2smdM0PLQsP9LUQ",
    authDomain: "olx-rakku.firebaseapp.com",
    projectId: "olx-rakku",
    storageBucket: "olx-rakku.appspot.com",
    messagingSenderId: "768014245805",
    appId: "1:768014245805:web:641ecded70b46e45104b24",
    measurementId: "G-TZW3EGQ4N8"
  };
  export const Firebase=firebase.initializeApp(firebaseConfig)