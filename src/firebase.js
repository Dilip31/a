import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBK5gUyxuCnaPXQTPSJ5t5cRGOVX1j1to0",
  authDomain: "calmminds-573b9.firebaseapp.com",
  projectId: "calmminds-573b9",
  storageBucket: "calmminds-573b9.appspot.com",
  messagingSenderId: "956147892223",
  appId: "1:956147892223:web:12d4bab6a5ef7b10dfb1ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };