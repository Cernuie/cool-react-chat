import React, { useEffect, useState } from 'react';

import { app, db } from "../util/firebase"
import { getAuth } from "firebase/auth"
const auth = getAuth(app)
export default function Channel() {
    const user = auth.currentUser 
    const [chats, setChats] = useState([]);
    const [content, setContent] = useState([]);
    const [readError, setReadError] = useState(null);
    const [writeError, setWriteError] = useState(null);
    const [loading, setLoading] = useState(false);
    let ref = React.createRef();

    const findChat = async(chatArea) => {
        db.ref("chats").on("value", snapshot => {
            let chats = [];
            snapshot.forEach((snapshot) => {
                chats.push(snap.val());
            });
            chats.sort((a, b) => {return a.timestamp = b.timestamp})
            setChats(chats);
            chatArea.scrollBy(0, chatArea.scrollHeight);
            setLoading(false)
        })
    }

    useEffect(() => {
        setReadError(null)
        setLoading(true)
        const chatArea = ref.current;
        findChat(chatArea)
        .then(response => {
            console.log(response)
        })
        .catch((e) => {
            console.log(e)
            setReadError(e)
            setLoading(false)
        })
    }, [])

    const handleChange = (event) => {
        setContent(event.target.value)
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        setWriteError(null)
        const chatArea = ref.current;
        try {
            await db.ref("chats").push({
                content: content,
                timestamp: Date.now(),
                uid: user.uid
            });
            setContent('');
            chatArea.scrollBy(0, chatArea.scrollHeight);
        } catch(e) {
            setWriteError({ writeError: error.message })
        }
    }

    const formatTime = (timestamp) => {
        const d = new Date(timestamp);
        const time = `${d.getDate()}/${(d.getMonth()+1)}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
        return time;
      }

    return (
        <div>
            <div className="chat-area" ref={ref}>
                {/* loading indicator */}
                {loadingChats ? <div className="spinner-border text-success" role="status">
                    <span className="sr-only">Loading...</span>
                </div> : ""}
                {/* chat area */}
                {chats.map(chat => {
                    return <p key={chat.timestamp} className={"chat-bubble " + (user.uid === chat.uid ? "current-user" : "")}>
                        {chat.content}
                        <br />
                        <span className="chat-time float-right">{formatTime(chat.timestamp)}</span>
                    </p>
                })}
            </div>
            <form onSubmit={handleSubmit} className="mx-3">
                <textarea className="form-control" name="content" onChange={handleChange} value={content}></textarea>
                {error ? <p className="text-danger">{error}</p> : null}
                <button type="submit" className="btn btn-submit px-5 mt-4">Send</button>
            </form>
            <div className="py-5 mx-3">
                Login in as: <strong className="text-info">{user.email}</strong>
            </div>
        </div>
    );
}