import React from 'react';
import firebase from '../util/firebase';
import { app } from '../util/firebase';
import { getAuth } from "firebase/auth"
export default function toDo({ todo }){
    const auth = getAuth(app);

    const SignOut = () => {
        return auth.currentUser && (
            <button className='signOut' onClick={() => auth.signOut()}>Sign Out</button>
        )
    }
    return(
        <div>
            <h1>Here</h1>
            <SignOut />
        </div>
    )

}
