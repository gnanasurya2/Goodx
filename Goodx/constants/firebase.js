import * as Firebase from "firebase";

import "firebase/storage";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyDJYo-vJoD65bXfx2OrEaTQWuC3fHG8op0",
  authDomain: "goodx-4d561.firebaseapp.com",
  databaseURL: "https://goodx-4d561.firebaseio.com",
  projectId: "goodx-4d561",
  storageBucket: "goodx-4d561.appspot.com",
  messagingSenderId: "680364883839",
  appId: "1:680364883839:web:56bc901170ba1f3ab1e44a",
};

const firebase = Firebase.initializeApp(firebaseConfig);

export default firebase;
