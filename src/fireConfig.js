import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyBWlS24coKEn872RlnNqkSy4cZYGwRox4E",
    authDomain: "spaceychatapp.firebaseapp.com",
    databaseURL: "https://spaceychatapp.firebaseio.com",
    projectId: "spaceychatapp",
    storageBucket: "spaceychatapp.appspot.com",
    messagingSenderId: "209628441849",
    appId: "1:209628441849:web:acad8cf66b620ae0568628",
    measurementId: "G-V9B3CR8PMC"
};
const fire = firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();
export { fire, provider };