import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDz_YjnCN98ILMmeTjYJbzN2ZaRJI-3DjQ",
    authDomain: "prak11-8aa90.firebaseapp.com",
    projectId: "prak11-8aa90",
    storageBucket: "prak11-8aa90.appspot.com",
    messagingSenderId: "382294967771",
    appId: "1:382294967771:web:be07d6212cefc0de6a93fe",
    measurementId: "G-S8E2KXCLDR"
      };

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;