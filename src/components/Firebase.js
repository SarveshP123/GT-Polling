// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAphCkkiwwFXEj9jmct-fzzAjT_R0V8rk4",
  authDomain: "auth-d260b.firebaseapp.com",
  projectId: "auth-d260b",
  storageBucket: "auth-d260b.appspot.com",
  messagingSenderId: "250749485806",
  appId: "1:250749485806:web:d4cd449d1e1db9309969ff",
  measurementId: "G-WEL3EV8FX5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider= new GoogleAuthProvider();
export {auth,provider};