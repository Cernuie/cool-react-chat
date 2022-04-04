import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDSS9O67ZqBaKaqv9jO3hyU7RQeGZiRMxM",
    authDomain: "viiject.firebaseapp.com",
    projectId: "viiject",
    storageBucket: "viiject.appspot.com",
    messagingSenderId: "190255363196",
    appId: "1:190255363196:web:4494022ec9a9b3d0fa85f9"
  };
  
firebase.initializeApp(firebaseConfig)

export default firebase
  