// import { defineStore } from "pinia";
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
  apiKey: "AIzaSyAnl0zGmAWPBBtufvzscd2tIyB1MCBA0mI",
  authDomain: "eas-pemweb.firebaseapp.com",
  projectId: "eas-pemweb",
  storageBucket: "eas-pemweb.appspot.com",
  messagingSenderId: "358471209965",
  appId: "1:358471209965:web:e3b7df063328f0bda28de4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


// export const useApp = defineStore({
  // id: "App",
  // state: () => ({
  //   users: [],
  //   input: {
  //     user: {
  //       email: '',
  //       password: '',
  //     },
  //   },
  // }),
  // actions: {
  //   async addRegister(user) {
  //     await axios.post('http://127.0.0.1:3000/register', {
  //       email: user.email,
  //       password: user.password,
  //     })
  //     .then((response) => {
  //       if(response.status) {
  //         Swal.fire({
  //           title: 'Success!',
  //           text: `Succesesfully added user ${user.email}`,
  //           icon: 'success',
  //           timer: 1500,
  //           showConfirmButton: false,
  //         });
  //       }
  //     }, (error) => {
  //       Swal.fire({
  //         title: 'Error!',
  //         text: `Seems like there is an error while adding user ${user.email}<br>${error}`,
  //         icon: 'error',
  //         timer: 1500,
  //         showConfirmButton: false,
  //       });
  //     });
  //     this.input.user.email = '';
  //     this.input.user.password = '';
  //   },
  //   async addLogin(user) {
  //     await axios.post('http://127.0.0.1:3000/login', {
  //       email: user.email,
  //       password: user.password,
  //     })
  //     .then((response) => {
  //       if(response.status) {
  //         Swal.fire({
  //           title: 'Success!',
  //           text: `Succesesfully added login ${user.password}`,
  //           icon: 'success',
  //           timer: 1500,
  //           showConfirmButton: false,
  //         });
  //       }
  //     }, (error) => {
  //       Swal.fire({
  //         title: 'Error!',
  //         text: `Seems like there is an error while adding login ${user.password}<br>${error}`,
  //         icon: 'error',
  //         timer: 1500,
  //         showConfirmButton: false,
  //       });
  //     });
  //     this.input.user.email = '';
  //     this.input.user.password = '';
  //   },
  // },
// });