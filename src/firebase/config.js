import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA_JtEOzY00CG6LGtydrSx7-qaRZrwR0jw",
    authDomain: "vue-crud-dbc52.firebaseapp.com",
    projectId: "vue-crud-dbc52",
    storageBucket: "vue-crud-dbc52.appspot.com",
    messagingSenderId: "508496404965",
    appId: "1:508496404965:web:e311c8f9035d494d7b0f0c",
    measurementId: "G-5B5CK8QPSQ"
  };

//init Firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

//timestamp

const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp}
