// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvh_N_0Dc6YdZVoxACwLRn9XdkMnwMwlc",
  authDomain: "koda-1bec6.firebaseapp.com",
  projectId: "koda-1bec6",
  storageBucket: "koda-1bec6.firebasestorage.app",
  messagingSenderId: "820110590976",
  appId: "1:820110590976:web:9c0cbf7dc65a15a78f44e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Pega a autenticação
const auth = getAuth(app);

export { auth };