import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyC66IWwbddGrFKDVe1c-9W_f3ZQGyGCcNo",
    authDomain: "facebook-clone-87e90.firebaseapp.com",
    databaseURL: "https://facebook-clone-87e90.firebaseio.com",
    projectId: "facebook-clone-87e90",
    storageBucket: "facebook-clone-87e90.appspot.com",
    messagingSenderId: "647031475457",
    appId: "1:647031475457:web:9ca872dead4375a3ec9f00",
    measurementId: "G-HCXGQ6H16C"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;