import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAYU-9ScKCQhk6k9cHfWr5PFJ9n_lRVlEM",
    authDomain: "messenger-clone-a40da.firebaseapp.com",
    projectId: "messenger-clone-a40da",
    storageBucket: "messenger-clone-a40da.appspot.com",
    messagingSenderId: "85003717033",
    appId: "1:85003717033:web:5fe43e1bee2ecbab10dcb8",
    measurementId: "G-BWB2RRLTVM"
});

const db = firebase.firestore();

export default db;