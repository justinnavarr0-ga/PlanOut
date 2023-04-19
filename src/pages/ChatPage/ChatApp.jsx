import React from 'react'
import ChatPage from './ChatPage';
import ChatAuth from './ChatAuth';
import { useState } from 'react';

export default function ChatApp() {
    const [username, setUsername] = useState();

    if (!username) {
      return <ChatAuth onAuth={(username) => setUsername(username)} />;
    } else {
      return <ChatPage username={username} />;
    }
}