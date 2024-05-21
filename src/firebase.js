// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyABHMIreuKO8ioAJz9-Vf4lD3BE5vVpKBc",
    authDomain: "project-management-956cc.firebaseapp.com",
    projectId: "project-management-956cc",
    storageBucket: "project-management-956cc.appspot.com",
    messagingSenderId: "771343138168",
    appId: "1:771343138168:web:81f3ae08c06cf8c1791c8d",
    measurementId: "G-FYQ3X6NEN1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);

export { auth,db };