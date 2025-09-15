// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7Z0oTGWRwnDJHxf6nYSssYpluzpjS3vw",
  authDomain: "krishivikas-39ba4.firebaseapp.com",
  projectId: "krishivikas-39ba4",
  storageBucket: "krishivikas-39ba4.firebasestorage.app",
  messagingSenderId: "1033740343101",
  appId: "1:1033740343101:web:e2f4e856924ed05411d754",
  measurementId: "G-5CKJ1KZKN6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore= getFirestore(app);

export { firestore };