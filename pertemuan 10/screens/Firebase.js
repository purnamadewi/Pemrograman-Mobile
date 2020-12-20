import firebase from 'firebase'
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyCom8J5I-P8M8Qou2f2vpaGpChuQZdmOiw",
    authDomain: "foodbook-f9c4c.firebaseapp.com",
    projectId: "foodbook-f9c4c",
    storageBucket: "foodbook-f9c4c.appspot.com",
    messagingSenderId: "666622435479",
    appId: "1:666622435479:web:a9e3e1d8aa4f20051649d2",
    measurementId: "G-G4C91F1C28"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore ()
  export default {
      firebase, db
  }