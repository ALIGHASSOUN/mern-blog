// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-e599b.firebaseapp.com",
  projectId: "mern-blog-e599b",
  storageBucket: "mern-blog-e599b.firebasestorage.app",
  messagingSenderId: "362225606223",
  appId: "1:362225606223:web:a688d78ab4fddd5bac143a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
