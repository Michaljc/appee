import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyD54i8q01SW6f6xgnNJNUuIq0yhyBYzxaM",
    authDomain: "simple-4b520.firebaseapp.com",
    projectId: "simple-4b520",
    storageBucket: "simple-4b520.appspot.com",
    messagingSenderId: "811166454391",
    appId: "1:811166454391:web:6994f3b1fd5afd617c2c72"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true});

  export default firebase;
