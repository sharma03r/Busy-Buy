// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzyyEAEXfogeqrjNLsfYzWsvpckID_fhM",
  authDomain: "busy-dafe0.firebaseapp.com",
  projectId: "busy-dafe0",
  storageBucket: "busy-dafe0.appspot.com",
  messagingSenderId: "259679287535",
  appId: "1:259679287535:web:49da708c326e642ae5031a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
