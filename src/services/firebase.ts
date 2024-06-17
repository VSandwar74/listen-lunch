import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBNe5YjwNWQ6YVSKQq1ANy4rg8Lw4DXo1w",
    authDomain: "listen-lunch-7j11.vercel.app/",
    projectId: "listen-59b63",
    storageBucket: "listen-59b63.appspot.com",
    messagingSenderId: "750142558083",
    appId: "1:750142558083:web:73b851d24e017e0ad070b6",
    measurementId: "G-RRSYQ8NPKV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);