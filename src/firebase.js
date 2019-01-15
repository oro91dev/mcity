import firebase from 'firebase/app';
import 'firebase/app'; 
import 'firebase/database';

const config = {
    apiKey: "",
    authDomain: "m-city-af4ee.firebaseapp.com",
    databaseURL: "https://m-city-af4ee.firebaseio.com",
    projectId: "m-city-af4ee",
    storageBucket: "m-city-af4ee.appspot.com",
    messagingSenderId: "745606049796"
  };

  firebase.initializeApp(config);

  const firebaseDB = firebase.database();
  const firebaseMatches = firebaseDB.ref('matches');


 export {
       firebase,
       firebaseMatches
 }
