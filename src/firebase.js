import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCURAFV2birK_Zal1vpUawj6pAZN4ShQ44",
    authDomain: "clone-7e3f6.firebaseapp.com",
    databaseURL: "https://clone-7e3f6.firebaseio.com",
    projectId: "clone-7e3f6",
    storageBucket: "clone-7e3f6.appspot.com",
    messagingSenderId: "693036105658",
    appId: "1:693036105658:web:ecf194580808fbcd2ae783",
    measurementId: "G-6PKKFTTSZY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db , auth };