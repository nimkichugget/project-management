// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDyG65Z2OkVkVCY_A-TO6xC7pZukXAmrC8",
    authDomain: "login-auth-b0cf7.firebaseapp.com",
    projectId: "login-auth-b0cf7",
    storageBucket: "login-auth-b0cf7.appspot.com",
    messagingSenderId: "868487027397",
    appId: "1:868487027397:web:2b92ffe70202921f636eac",
    measurementId: "G-XGSMB4BQ00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };