import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAK58_WPnAPXg4OsGtaTGEx_iBWdM3p1Rc",
    authDomain: "cellular-cortex-239205.firebaseapp.com",
    projectId: "cellular-cortex-239205",
    storageBucket: "cellular-cortex-239205.appspot.com",
    messagingSenderId: "531732232998",
    appId: "1:531732232998:web:d8e7fb9c0a4acc31d29fe7",
    measurementId: "G-GNRKJ796KH"
  };

firebase.initializeApp(firebaseConfig)

const crud = firebase.firestore() 
const projectAuth = firebase.auth()

export {crud, projectAuth}