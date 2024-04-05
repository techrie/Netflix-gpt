// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAt1pxUK7ab0bM1lpTX8j6DgF7E4K4zMo",
  authDomain: "netflixgpt-b3d2c.firebaseapp.com",
  projectId: "netflixgpt-b3d2c",
  storageBucket: "netflixgpt-b3d2c.appspot.com",
  messagingSenderId: "57579971346",
  appId: "1:57579971346:web:237e8c9088a751976549cb",
  measurementId: "G-JETBP90038",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
