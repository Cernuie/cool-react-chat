import logo from './logo.svg';
import './App.css';
import {app, db} from './util/firebase';
import ToDo from './components/ToDo';

import { getAuth } from "firebase/auth";
import 'firebase/compat/analytics';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const auth = getAuth(app)

function App() {

  const [user] = useAuthState(auth)
  return (
    <body>
    <div className="App">
      {user ? <ToDo /> : <div> not home yet </div>}
    </div>
    </body>
  );
}

export default App;
