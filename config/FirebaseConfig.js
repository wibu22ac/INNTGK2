// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSyc81MUCfl7fQ8SR6XkHtbvy4eo5N09I",
  authDomain: "innogk2.firebaseapp.com",
  databaseURL: "https://innogk2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "innogk2",
  storageBucket: "innogk2.appspot.com",
  messagingSenderId: "320242448792",
  appId: "1:320242448792:web:515a4a2cb8f2865fe4d3ed",
  measurementId: "G-825BFZDHK3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

