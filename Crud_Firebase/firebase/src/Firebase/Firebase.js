// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDFh4-QtC5sT5NiAtXV2h-8nSV2_Mm6-U",
  authDomain: "product-d3222.firebaseapp.com",
  projectId: "product-d3222",
  storageBucket: "product-d3222.firebasestorage.app",
  messagingSenderId: "787993567357",
  appId: "1:787993567357:web:11869bb198f1062d52d114",
  measurementId: "G-FJW0D47ER6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const fireDb = getFirestore(app)