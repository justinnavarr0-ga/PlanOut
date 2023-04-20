import React from 'react'
import ChatPage from './ChatPage';
import ChatAuth from './ChatAuth';
import { useState } from 'react';

export default function ChatApp({user}) {
    const [username, setUsername] = useState('');

    
    console.log("CHATAPP",user)

    if (!username) {
      return <ChatAuth user={user} onAuth={(username) => setUsername(username)} />;
    } else {
      return <ChatPage username={username} />;
    }
}