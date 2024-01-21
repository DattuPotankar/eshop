
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCrPcXpIjhxlh11OKC1iKhWocnc9-NsLKs",
  authDomain: "eshop-93307.firebaseapp.com",
  projectId: "eshop-93307",
  storageBucket: "eshop-93307.appspot.com",
  messagingSenderId: "178312288321",
  appId: "1:178312288321:web:3d3a495dafd12050d0cec0",
  measurementId: "G-DTQPDS1EF7"
};

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();

  export { db, auth};