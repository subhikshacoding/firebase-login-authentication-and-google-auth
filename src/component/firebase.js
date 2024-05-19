import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDFuajP6-610ffJ50_Q8zAFe0TTxfCasdA",
  authDomain: "login-auth-b5dc6.firebaseapp.com",
  projectId: "login-auth-b5dc6",
  storageBucket: "login-auth-b5dc6.appspot.com",
  messagingSenderId: "1074701375762",
  appId: "1:1074701375762:web:6dffdb64ebcb203e313bcb",
  measurementId: "G-GEZD22W2FG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
const provider = new GoogleAuthProvider()

export {app,auth,provider}


