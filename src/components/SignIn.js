import React from 'react';
import { app } from '../util/firebase';
import 'firebase/compat/auth'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FirebaseError } from 'firebase/app';
export default function SignIn(){

    const googleSignIn = () => {
        const auth = getAuth(app);
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
        }
    return(<>
        <div> not signed in yet: </div>
        <button classname="signIn" onClick={googleSignIn}>Sign In With Google</button>
        </>
    )
}