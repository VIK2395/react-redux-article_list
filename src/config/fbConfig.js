import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
const fbConfig = {
    apiKey: "AIzaSyBdusrqNgQvuNpqamtWDaZyG2VNLnPl34A",
    authDomain: "react-redux-article-list.firebaseapp.com",
    databaseURL: "https://react-redux-article-list.firebaseio.com",
    projectId: "react-redux-article-list",
    storageBucket: "react-redux-article-list.appspot.com",
    messagingSenderId: "158002320497",
    appId: "1:158002320497:web:53970a979e27b8d23b37d0"
};

// Initialize Firebase
firebase.initializeApp(fbConfig);
// Initialize Firestore
firebase.firestore();

//firebase object for setting the back firebase project when export used
export default firebase;
