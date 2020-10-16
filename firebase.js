import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC5j3uzTTjPU5z0yBPx_5PvBAU2Bgx3RhU",
    authDomain: "trench-messenger.firebaseapp.com",
    databaseURL: "https://trench-messenger.firebaseio.com",
    projectId: "trench-messenger",
    storageBucket: "trench-messenger.appspot.com",
    messagingSenderId: "1011629536345",
    appId: "1:1011629536345:web:f4b035907ce88e5de36d48",
    measurementId: "G-FYRBS69BNH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth, provider };