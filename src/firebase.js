// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUf8B9Xk7rkLFOAvSWiSfjBZdt1C8P5Zw",
  authDomain: "portfolio-18b49.firebaseapp.com",
  databaseURL: "https://portfolio-18b49-default-rtdb.firebaseio.com",
  projectId: "portfolio-18b49",
  storageBucket: "portfolio-18b49.appspot.com",
  messagingSenderId: "358380006167",
  appId: "1:358380006167:web:82428fd379b581ae502552",
  measurementId: "G-6N282B26Z4"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default app.database().ref()



