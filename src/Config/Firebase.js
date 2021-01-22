import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAo6mIqg_L1oxbxVPM21nD1a-jFKlD5ikQ",
    authDomain: "project-ecommerce-america.firebaseapp.com",
    databaseURL: "https://project-ecommerce-america-default-rtdb.firebaseio.com",
    projectId: "project-ecommerce-america",
    storageBucket: "project-ecommerce-america.appspot.com",
    messagingSenderId: "578008379605",
    appId: "1:578008379605:web:7f34d2ac88104e105cb25c"
};

firebase.initializeApp(firebaseConfig);

export default firebase
