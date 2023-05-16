// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnbx4203NcT8C5zJiUCiQgtE2_gYcLn-8",
  authDomain: "cars-doctor-95bcf.firebaseapp.com",
  projectId: "cars-doctor-95bcf",
  storageBucket: "cars-doctor-95bcf.appspot.com",
  messagingSenderId: "793829938731",
  appId: "1:793829938731:web:ff3665e8b40f2e7e3e3c6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;