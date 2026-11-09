// Import fungsi yang dibutuhkan dari Firebase SDK (Web Version)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Konfigurasi Firebase milikmu
const firebaseConfig = {
  apiKey: "AIzaSyDn5kQcx7wY17JV3IBJ7vvZEwXffhKOoHw",
  authDomain: "digital-invitation-65d92.firebaseapp.com",
  projectId: "digital-invitation-65d92",
  storageBucket: "digital-invitation-65d92.firebasestorage.app",
  messagingSenderId: "790866679976",
  appId: "1:790866679976:web:1db4069a5657131a30ca9d",
  measurementId: "G-44H7FQQGMK"
};

// Initialize Firebase & Export Database Firestore
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);