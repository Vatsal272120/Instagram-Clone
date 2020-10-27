import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD-_lkrxSs6v3LoHAndFzOhTV2z-j45J5Q",
  authDomain: "instagram-clone-bd353.firebaseapp.com",
  databaseURL: "https://instagram-clone-bd353.firebaseio.com",
  projectId: "instagram-clone-bd353",
  storageBucket: "instagram-clone-bd353.appspot.com",
  messagingSenderId: "812173164038",
  appId: "1:812173164038:web:572106b70f304fb66a0d87",
  measurementId: "G-N82W9114BX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
