import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAIBhyyNbXD3SFFtTwB9A4hzWrgk9nioIw",
    authDomain: "finalprojectpw.firebaseapp.com",
    projectId: "finalprojectpw",
    storageBucket: "finalprojectpw.appspot.com",
    messagingSenderId: "296051950813",
    appId: "1:296051950813:web:cd5d389ac3b73336e8c734",
    measurementId: "G-B3E79085PX"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);

export const db = firebaseApp.firestore();