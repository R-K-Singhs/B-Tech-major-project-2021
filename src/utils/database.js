import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyClkcoNjFb8zuSIw1SeL_CFKnw0b46ninU",
  authDomain: "digital-classroom-cc155.firebaseapp.com",
  projectId: "digital-classroom-cc155",
  storageBucket: "digital-classroom-cc155.appspot.com",
  messagingSenderId: "100791772524",
  appId: "1:100791772524:web:f1dead9c5f38f5aedf7f49",
  measurementId: "G-EE0Z26KNLH",
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database().ref();

export default database;