import { initializeApp } from "firebase/app";

import {
  getAuth,
  RecaptchaVerifier
} from "firebase/auth";


// FIREBASE CONFIG

const firebaseConfig = {

  apiKey: "AIzaSyAV1cyheIcFm_7lWl7JCZuDbGTbQhkX728",

  authDomain: "servicehub-ba568.firebaseapp.com",

  projectId: "servicehub-ba568",

  storageBucket: "servicehub-ba568.firebasestorage.app",

  messagingSenderId: "78816974951",

  appId: "1:78816974951:web:07bbdea1e8967ad4bb9cc2",

  measurementId: "G-L5TM5DQ97M"

};


// INITIALIZE FIREBASE

const app = initializeApp(firebaseConfig);


// AUTH

export const auth = getAuth(app);


// EXPORT RECAPTCHA

export { RecaptchaVerifier };