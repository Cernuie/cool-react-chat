import logo from './logo.svg';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDSS9O67ZqBaKaqv9jO3hyU7RQeGZiRMxM",
  authDomain: "viiject.firebaseapp.com",
  projectId: "viiject",
  storageBucket: "viiject.appspot.com",
  messagingSenderId: "190255363196",
  appId: "1:190255363196:web:4494022ec9a9b3d0fa85f9"
};

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth();
const firestore = firebase.firestore;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
