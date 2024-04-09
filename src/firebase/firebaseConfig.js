// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcSheHPIfuvOBy53KY7R96lFS0pqrU5I0",
  authDomain: "aip-trading-bot.firebaseapp.com",
  projectId: "aip-trading-bot",
  storageBucket: "aip-trading-bot.appspot.com",
  messagingSenderId: "528734869338",
  appId: "1:528734869338:web:c5a0e8313668bb6fecc563"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const COLLECTIONS = {
  USERS: 'users',
  BOTS: 'bot3',
  ASSETS: 'asset',
}

export default app

