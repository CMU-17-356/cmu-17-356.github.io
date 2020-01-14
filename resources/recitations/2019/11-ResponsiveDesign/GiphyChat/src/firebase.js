import firebase from "firebase/app";
// sub dependencies
import "firebase/auth";
import "firebase/database";
import "firebase/storage"; 





  var config = {
    apiKey: "AIzaSyACw8X1qTS0XlYSXsYEAOa0WcQx8TChkVM",
    authDomain: "giphy-adcd2.firebaseapp.com",
    databaseURL: "https://giphy-adcd2.firebaseio.com",
    projectId: "giphy-adcd2",
    storageBucket: "giphy-adcd2.appspot.com",
    messagingSenderId: "884423717039"
  };
  firebase.initializeApp(config);


  export default firebase;