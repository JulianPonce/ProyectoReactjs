import { initializeApp } from "firebase/app";


import  firebase from "firebase/app"

import "firebase/firestore"

const firebaseConfig = {

  apiKey: "AIzaSyDboneQKz5Tchcx7XHWPgeWGlCdkKC3ios",

  authDomain: "e-commerce-coder-75950.firebaseapp.com",

  projectId: "e-commerce-coder-75950",

  storageBucket: "e-commerce-coder-75950.appspot.com",

  messagingSenderId: "670018791036",

  appId: "1:670018791036:web:989db3a4f6787da2520bf9",

  measurementId: "G-B2L838F1M1"

};

const app = initializeApp(firebaseConfig);

export const firestore = firebase.firestore(app)

