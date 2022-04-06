import React, {useEffect, useState} from 'react';
import { db } from '../util/firebase';
import { app } from '../util/firebase';
import { getAuth } from "firebase/auth"
import { getDatabase, ref, set} from "firebase/database"
const auth = getAuth(app);

export default function ToDo(){

    const [input, setInput] = useState('')

    const SignOut = () => {
        return auth.currentUser && (
            <button className='signOut' onClick={() => auth.signOut()}>Sign Out</button>
        )
    }

    const checkForUser = async() => {
        console.log(auth.currentUser)
    }

    const createUser = () => {
        const db = getDatabase();
        set(ref(db, 'users/' + auth.currentUser.uid), {
            username: input,
            email: auth.currentUser.email
        })
        .then((res) => {
            console.log('it worked whoa', res)
        })
        .catch((e) => {
            console.log(e)
        })
    }

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('here', input)
        createUser()
    }
    return(
        <div>
            <h1>Here</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" name="name" value={input} onChange={handleChange}></input>
            </label>
            <input type="submit" value="Submit"></input>
        </form>
            <SignOut />
        </div>
    )
}
