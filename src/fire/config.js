import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCQ6PpxQzgBafkmeTYMJUIiGLDX8MCqYnY",
  authDomain: "pregunta-6add3.firebaseapp.com",
  projectId: "pregunta-6add3",
  storageBucket: "pregunta-6add3.appspot.com",
  messagingSenderId: "686149478891",
  appId: "1:686149478891:web:a3ea25d0968d084eba11ae",
  measurementId: "G-XSBX17YC1K",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
