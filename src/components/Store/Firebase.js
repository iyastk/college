// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOfxt8kkOxcNRZGAtJRGd2B7JB9veda9o",
  authDomain: "buac-c602f.firebaseapp.com",
  projectId: "buac-c602f",
  storageBucket: "buac-c602f.appspot.com",
  messagingSenderId: "685004811458",
  appId: "1:685004811458:web:140c80e78a7e039473df5b",
  measurementId: "G-SJXLVJYNL4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
