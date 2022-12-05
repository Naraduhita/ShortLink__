// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// https://firebase.google.com/docs/firestore/quickstart
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAnl0zGmAWPBBtufvzscd2tIyB1MCBA0mI",
    authDomain: "eas-pemweb.firebaseapp.com",
    projectId: "eas-pemweb",
    storageBucket: "eas-pemweb.appspot.com",
    messagingSenderId: "358471209965",
    appId: "1:358471209965:web:e3b7df063328f0bda28de4"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export { database };
