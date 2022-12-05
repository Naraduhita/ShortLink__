import { defineStore } from "pinia";
import axios from "axios";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
} from "firebase/firestore";
import Swal from 'sweetalert2';

// isikan firebaseConfig disini
const firebaseConfig = {
  apiKey: "AIzaSyAIBhyyNbXD3SFFtTwB9A4hzWrgk9nioIw",
  authDomain: "finalprojectpw.firebaseapp.com",
  projectId: "finalprojectpw",
  storageBucket: "finalprojectpw.appspot.com",
  messagingSenderId: "296051950813",
  appId: "1:296051950813:web:cd5d389ac3b73336e8c734",
  measurementId: "G-B3E79085PX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export const useApp = defineStore({
    id: "App",
    state: () => ({
    })
});