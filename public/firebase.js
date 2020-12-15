// const admin = require('firebase-admin');

// const serviceAccount = require('./path/to/serviceAccountKey.json');

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// const db = admin.firestore();

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDNt6ESq-Kxkw6T_a65TAW4pMjQUsEegPE",
    authDomain: "final-project-298122.firebaseapp.com",
    projectId: "final-project-298122",
    storageBucket: "final-project-298122.appspot.com",
    messagingSenderId: "93701911203",
    appId: "1:93701911203:web:9eb3e36403eb0ecf9d8516"
  };

// Initialize Firebase
const initApp = firebase.initializeApp(firebaseConfig);
const auth = initApp.auth();
const db = initApp.firestore();
// const db = firebase.database();