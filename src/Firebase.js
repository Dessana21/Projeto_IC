import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


  // Your web app's Firebase configuration
  let firebaseConfig = {
    apiKey: "AIzaSyDQidPXLnADgxvpQUiZcZWI0DrRxF8dCY0",
    authDomain: "topsis-eef40.firebaseapp.com",
    databaseURL: "https://topsis-eef40.firebaseio.com",
    projectId: "topsis-eef40",
    storageBucket: "topsis-eef40.appspot.com",
    messagingSenderId: "905297855903",
    appId: "1:905297855903:web:d99aafac0291ab2cc9a9aa",
    measurementId: "G-P362HF080C"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;