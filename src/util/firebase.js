import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSS9O67ZqBaKaqv9jO3hyU7RQeGZiRMxM",
    authDomain: "viiject.firebaseapp.com",
    projectId: "viiject",
    databaseURL: "https://viiject-default-rtdb.firebaseio.com/",
    storageBucket: "viiject.appspot.com",
    messagingSenderId: "190255363196",
    appId: "1:190255363196:web:4494022ec9a9b3d0fa85f9",
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db }